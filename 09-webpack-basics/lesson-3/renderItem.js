export const renderItem = (item) => {
    switch (item.type) {
        case "audio": {
            return `
                <article class="gallery__cards__item">
                    <div class="gallery__cards__item__audio">
                        <audio controls>
                            <source src="${item.source}">
                        </audio>
                    </div>
                    <div class="gallery__cards__item__title">
                        <h2>${item.title}</h2>
                    </div>
                </article>`;
        }
        case "video": {
            return `
                <article class="gallery__cards__item">
                    <div class="gallery__cards__item__video">
                        <video controls>
                            <source src="${item.source}">
                        </video>
                    </div>
                    <div class="gallery__cards__item__title">
                        <h2>${item.title}</h2>
                    </div>
                </article>`;
        }
        default: {
            return `
                <article class="gallery__cards__item">
                    <div class="gallery__cards__item__img">
                        <img src="${item.source}" alt="${item.title}">
                    </div>
                    <div class="gallery__cards__item__title">
                        <h2>${item.title}</h2>
                    </div>
                </article>`;
        }
    }
};
