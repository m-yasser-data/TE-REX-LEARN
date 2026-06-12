const supabaseUrl = 'https://tvsvliiaxnsejtmiafue.supabase.co';
const supabaseKey = 'sb_publishable_pfHsKJ2G8_YaFwwpIdyM_g_Y-fEDCyU';
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