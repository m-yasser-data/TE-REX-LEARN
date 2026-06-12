const supabaseUrl = 'https://tvsvliiaxnsejtmiafue.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2c3ZsaWlheG5zZWp0bWlhZnVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEyMTEzMzMsImV4cCI6MjA5Njc4NzMzM30.Hm1Z4-nWQH4Zu61LwkSF_MLGGVdu-kA4rDNGecdAOl0';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

async function loginUser() {
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
            
    const { data, error } = await supabase.auth.signInWithPassword({
        email: emailInput,
        password: passwordInput,
    });

    if (error) {
        alert('السيستم بيقولك الخطأ هو: ' + error.message);
    } else {
        window.location.href = 'dashboard.html';
    }
}
