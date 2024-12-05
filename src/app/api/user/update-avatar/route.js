import { createClient } from '@/lib/supabase';
import formidable from 'formidable';
import fs from 'fs/promises';

export const config = {
    api: {
        bodyParser: false,
    },
};

export async function POST(req) {
    const supabase = createClient();
    const form = new formidable.IncomingForm({
        keepExtensions: true,
    });

    const responseHeaders = {
        'Content-Type': 'application/json',
    };

    try {
        // Parse the incoming form
        const { fields, files } = await new Promise((resolve, reject) => {
            form.parse(req, (err, fields, files) => {
                if (err) return reject(err);
                resolve({ fields, files });
            });
        });

        const { userId } = fields;
        const file = files.file;

        // Validate input
        if (!userId || !file) {
            return new Response(
                JSON.stringify({ message: 'Missing userId or file' }),
                { status: 400, headers: responseHeaders }
            );
        }

        const allowedMimeTypes = ['image/jpeg', 'image/png'];
        if (!allowedMimeTypes.includes(file.mimetype)) {
            return new Response(
                JSON.stringify({ message: 'Unsupported file type. Allowed types are JPEG and PNG.' }),
                { status: 400, headers: responseHeaders }
            );
        }

        // Upload file to Supabase storage
        const { data: uploadData, error: uploadError } = await supabase.storage
            .from('avatars')
            .upload(
                `users/${userId}/${file.newFilename}`,
                fs.createReadStream(file.filepath),
                {
                    cacheControl: '3600',
                    upsert: true,
                }
            );

        if (uploadError) {
            console.error('Upload Error:', uploadError.message);
            return new Response(
                JSON.stringify({ message: 'Failed to upload file to storage.' }),
                { status: 500, headers: responseHeaders }
            );
        }

        // Get public URL for the uploaded file
        const { data: publicUrlData } = supabase.storage
            .from('avatars')
            .getPublicUrl(uploadData.path);

        if (!publicUrlData || !publicUrlData.publicUrl) {
            return new Response(
                JSON.stringify({ message: 'Failed to retrieve public URL.' }),
                { status: 500, headers: responseHeaders }
            );
        }

        const avatarUrl = publicUrlData.publicUrl;

        // Update user's avatar in the database
        const { error: dbError } = await supabase
            .from('users')
            .update({ foto: avatarUrl })
            .eq('id', userId);

        if (dbError) {
            console.error('Database Error:', dbError.message);
            return new Response(
                JSON.stringify({ message: 'Failed to update user profile.' }),
                { status: 500, headers: responseHeaders }
            );
        }

        return new Response(
            JSON.stringify({ avatarUrl }),
            { status: 200, headers: responseHeaders }
        );
    } catch (error) {
        console.error('Error handling avatar upload:', error);
        return new Response(
            JSON.stringify({ message: error.message || 'Server error occurred.' }),
            { status: 500, headers: responseHeaders }
        );
    }
}
