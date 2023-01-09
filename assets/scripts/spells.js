document.addEventListener("DOMContentLoaded", function (event) {
    fetch("https://hp-api.onrender.com/api/spells")
        .then(response => response.json())
        .then(spells => {
            console.log(spells[0].name);

            /*for (let spell of spells) {
                document.querySelector('.api_spells').innerHTML = `<div class="slider__item slider__itemSpell">
            <p class="galleryText_size">${spells[0].name} </p>
        </div>`*/

            let spellsArray = document.querySelectorAll('.slider__itemSpell');
            spellsArray.forEach(elem => {
                elem.addEventListener('click', () => {
                    let modalSpells = $modal2({
                        content: `<div class="spell-card">
                        <div class="spell-card__container">
                            <p class="spell-card__container__text1">Apparate</p>
                            <p class="spell-card__container__text2">A non-verbal transportation spell that allows a witch or wizard to
                                instantly travel on the spot and appear at another location (disapparate is the opposite)</p>
                        </div>
                        <button class="spell-card__container__button">Close</button>
                    </div>`,
                        footerButtons: [
                            { class: 'btn btn__cancel button__shine', text: 'Close', handler: 'modalHandlerCancel' }
                        ]
                    });
                    modalSpells.show();
                    document.querySelector('.btn__cancel').addEventListener("click", () => modalSpells.hide());
                })
            });
        })
        .catch(err => console.log(err));
})


