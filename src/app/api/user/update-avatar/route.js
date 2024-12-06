import { createClient } from "@/lib/supabase";

export async function POST(req) {
    const supabase = createClient();

    try {
        // Parse body to get file and user ID (assumes `file` is sent as a FormData)
        const formData = await req.formData();
        const file = formData.get('file'); // Assuming the file field name is "file"
        const userId = formData.get('userId'); // Assuming user ID is provided in the request

        if (!file || !userId) {
            return new Response(JSON.stringify({ error: 'File and userId are required' }), { status: 400 });
        }

        // Generate a unique file path using userId and the original file name
        const filePath = `users/${userId}/${file.name}`;

        // Upload the file to Supabase storage
        const { data: uploadData, error: uploadError } = await supabase.storage
            .from('avatars') // Replace with your storage bucket name
            .upload(filePath, file, {
                upsert: true,
            });

        if (uploadError) {
            console.error(uploadError);
            return new Response(JSON.stringify({ error: 'Failed to upload file' }), { status: 500 });
        }

        // Generate public URL for the uploaded file
        const { data: publicUrlData } = supabase.storage
            .from('avatars')
            .getPublicUrl(filePath);

        if (!publicUrlData) {
            return new Response(JSON.stringify({ error: 'Failed to get public URL' }), { status: 500 });
        }

        const publicUrl = publicUrlData.publicUrl;

        // Update user record in the `users` table with the photo URL
        const { error: updateError } = await supabase
            .from('users')
            .update({ foto: publicUrl }) // Assuming the column for the photo URL is named 'foto'
            .eq('id', userId);

        if (updateError) {
            console.error(updateError);
            return new Response(JSON.stringify({ error: 'Failed to update user record' }), { status: 500 });
        }

        return new Response(JSON.stringify({ success: true, publicUrl }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'An unexpected error occurred' }), { status: 500 });
    }
}
