const setLastUpdateDate = async () => {
    const textDiv = document.getElementById("lastUpdateDate");
    if (!textDiv) {
        return;
    }

    await fetch("https://api.github.com/repos/Anton-Pan/Anton-Pan.github.io")

        .then(res => {
            if (!res.ok) {
                throw res;
            }
            return res.json();
        })
        .then(data => {
                const lastUpdateDate = new Date(data.updated_at); // eg: "2025-11-19T08:48:04Z"
                if (!textDiv || !lastUpdateDate) {
                    return;
                }
                const updateDay = lastUpdateDate.getDate()
                const updateMonth = lastUpdateDate.toLocaleString('default', {month: 'long'});
                const updateYear = lastUpdateDate.getFullYear();
                textDiv.innerText = `last update: ${updateMonth} ${updateDay}, ${updateYear}`; // eg: "last update: November 1st, 2025"
            }
        )
}

(document.addEventListener("DOMContentLoaded", async () => {
    await setLastUpdateDate();
}));