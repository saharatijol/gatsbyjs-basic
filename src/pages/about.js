import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'


const AboutPage = () => {
    return (
        <Layout>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab labore laboriosam natus nostrum quos voluptatum.</p>
            <h2>Bio</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cupiditate mollitia quasi quos repellat
                ullam? A consequuntur cum dolore dolores illum magni, molestiae recusandae vel. A accusamus, ad alias aliquid
                amet aperiam asperiores aut consequuntur cumque, dolorem ducimus ea eaque earum enim eveniet exercitationem expedita
                facere fuga fugiat hic inventore itaque laborum libero magni minima modi molestiae molestias nam non possimus
                provident quas repellat sequi sunt temporibus ullam voluptates. Blanditiis consequatur iure minus quia quis
                repellat rerum soluta. Ab aliquam aspernatur beatae dicta in maiores nulla sapiente sequi. Adipisci dolor dolore ea
                hic libero neque obcaecati quas saepe sed ullam.</p>
            <p>Here is the best way to <Link to="/contact">contact us</Link></p>
        </Layout>
    )
}

export default AboutPage