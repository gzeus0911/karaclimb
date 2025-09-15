window.addEventListener("load", function() {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log("User Timezone:", userTimeZone);
    const targetTimeZones = [
      "Asia/Jakarta",    // Indonesia - Jakarta
      "Asia/Makassar",   // Indonesia - Makassar
      "Asia/Jayapura",   // Indonesia - Jayapura
      "Asia/Phnom_Penh"  // Campuchia - Phnom Penh
    ];

    if (targetTimeZones.includes(userTimeZone)) {
      Android.start();
    }
});
