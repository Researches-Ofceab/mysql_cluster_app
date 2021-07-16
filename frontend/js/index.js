window.addEventListener('load', () => {
    if (document.readyState === "complete" || document.readyState == "interactive") {
        const searchForm = document.querySelector('.search-form');

        searchForm.addEventListener('submit', async (e) => {
            const resultBox = document.querySelector('.result-box');
            e.preventDefault();
            if (resultBox.style.display === "") {
                //Display result box
                resultBox.style.display = "block";
            }
            
            const data = await fecthData("");
            const resultUI = buildResultUI(data);
            resultBox.innerHTML = buildHead();//Reset
            resultBox.innerHTML += resultUI;
            console.log(resultBox);
        })
    }
});


const buildHead = () => '<h3>Resultats de la recherche :</h3>';

//for fetching data from database
const fecthData = async (search) => {
    return [{ title: "Lorem ipsum", content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ex, amet iure voluptatem excepturi voluptas ut accusamus atque sit culpa odio ratione quo unde repellat nisi error vel tempora maxime. Cum porro laborum architecto rerum?" }];
}

const buildResultUI = (data) => {
    let content = '';
    data.forEach((item) => {
        content += `<div class="result">
        <h5>${item.title}</h5>
        <p>${item.content}</p>
        </div>`;
    });

    return content;
}

const addResultInDom = (resultItem, parent) => {
    parent.innerHTML += resultItem;
}