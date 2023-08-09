import { hover } from '@testing-library/user-event/dist/hover.js';
import ProductList from './ProductList.js';

let data = [{ name: 'FIRST', lancerName: 'Sandu', id: 1, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rem dolor reiciendis iste maxime quia accusamus, magni illum maiores, ipsum repellat nulla dolorem laudantium natus. Iusto optio necessitatibus ducimus tenetur quod officiis eius nemo!', code: 'code34', price:20 },
{ name: 'SECOND', lancerName: 'Sandy', id: 2, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rem dolor reiciendis iste maxime quia accusamus, magni illum maiores, ipsum repellat nulla dolorem laudantium natus. Iusto optio necessitatibus ducimus tenetur quod officiis eius nemo!', code: 'code34' },
{ name: 'THIRD', lancerName: 'Basanta', id: 3, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rem dolor reiciendis iste maxime quia accusamus, magni illum maiores, ipsum repellat nulla dolorem laudantium natus. Iusto optio necessitatibus ducimus tenetur quod officiis eius nemo!', code: 'code34' },{ name: 'THIRD', lancerName: 'Basanta', id: 3, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rem dolor reiciendis iste maxime quia accusamus, magni illum maiores, ipsum repellat nulla dolorem laudantium natus. Iusto optio necessitatibus ducimus tenetur quod officiis eius nemo!', code: 'code34' }];

const Home = () => {
    return (
        <div className="home">
            <div className="top">
                <p>
                    <span>Nexus
                    </span>
                    : The ultimate place to buy and sell Smart Contract</p>
                <div className="head2"><p>Explore our latest Smart Contract</p></div>
                <div className="buttons">
                    <button id="freeLancer" className="whiteButton">I am a freelancer</button>
                    <button id="smartContract" className="blueButton">I want to buy Smart Contract</button>
                </div>
            </div>
            <ProductList data={data} />
        </div>
    );
}

export default Home;