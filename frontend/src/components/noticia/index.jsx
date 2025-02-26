import React from 'react';
import styles from './index.module.css';

export default function Noticia({ kEy, src, titulo, conteudo, autor, categoria, dataPublicacao }) {


    return (
        <section className={styles.smallNewsContainer}>
            <div className={styles.smallNewsImgWrapper}>
                <img src={src} alt={titulo} />
            </div>
            <div className={styles.smallNewsTextWrapper}>
                <h1>{titulo}</h1>
                <p><strong>Autor: </strong>{autor}</p>
                <p><strong>Categoria: </strong>{categoria}</p>
                <div className={styles.content}>
                    <p>{conteudo}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis deserunt, ea culpa facilis ipsa maiores provident doloremque pariatur repudiandae impedit exercitationem aperiam, maxime quisquam quos assumenda quam facere repellat iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis commodi consequatur officia dolores odio, ullam qui? Ratione architecto facilis aliquam illum? Illum eaque doloribus repellendus amet iste iure inventore atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cupiditate provident reiciendis amet labore! Maiores, ducimus libero sequi accusantium, voluptatibus maxime asperiores laboriosam quasi quae cumque veritatis possimus atque quibusdam Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fugiat assumenda sed non ipsa voluptatum dicta, aliquam alias at in enim, repellat eaque itaque sapiente, vero saepe soluta labore! Possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nemo commodi ullam quia hic quam error quis incidunt unde fuga ipsa tempora modi officia non numquam, magnam enim voluptates beatae.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis deserunt, ea culpa facilis ipsa maiores provident doloremque pariatur repudiandae impedit exercitationem aperiam, maxime quisquam quos assumenda quam facere repellat iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis commodi consequatur officia dolores odio, ullam qui? Ratione architecto facilis aliquam illum? Illum eaque doloribus repellendus amet iste iure inventore atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cupiditate provident reiciendis amet labore! Maiores, ducimus libero sequi accusantium, voluptatibus maxime asperiores laboriosam quasi quae cumque veritatis possimus atque quibusdam Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fugiat assumenda sed non ipsa voluptatum dicta, aliquam alias at in enim, repellat eaque itaque sapiente, vero saepe soluta labore! Possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nemo commodi ullam quia hic quam error quis incidunt unde fuga ipsa tempora modi officia non numquam, magnam enim voluptates beatae.</p>
                </div>
            </div>
        </section>
    );
}