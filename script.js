// Supabase Configuration
const supabaseUrl = "https://your-supabase-url.supabase.co";
const supabaseKey = "your-supabase-key";
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Sliders for Configuration
document.getElementById("customizations").addEventListener("input", function() {
    document.getElementById("customValue").innerText = this.value;
});

document.getElementById("integrations").addEventListener("input", function() {
    document.getElementById("integrationValue").innerText = this.value;
});

// Architecture Diagram Generation (D3.js placeholder)
function drawDiagram() {
    const canvas = document.getElementById("architectureCanvas");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#004466";
    ctx.fillRect(50, 50, 300, 200);
    ctx.fillStyle = "white";
    ctx.fillText("Generated Architecture", 120, 150);
}
drawDiagram();

// OTP Authentication
async function sendOTP() {
    const email = document.getElementById("email").value;
    const { data, error } = await supabase.auth.signInWithOtp({ email });

    if (error) alert("Error sending OTP");
    else alert("OTP sent to your email!");
}

async function verifyOTP() {
    const otp = document.getElementById("otp").value;
    const { data, error } = await supabase.auth.verifyOtp({ token: otp, type: 'email' });

    if (error) alert("Invalid OTP");
    else alert("Login Successful!");
}

// Export to PDF
function exportToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("Sinergy Solutions IT Architecture Report", 10, 10);
    doc.text("Customizations: " + document.getElementById("customValue").innerText, 10, 30);
    doc.text("Integrations: " + document.getElementById("integrationValue").innerText, 10, 50);

    doc.save("IT_Architecture_Report.pdf");
}