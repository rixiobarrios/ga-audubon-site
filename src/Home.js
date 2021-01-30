import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <>
                <h2>Birds</h2>
                <main>
                    {this.props.birdsList.map((bird) => {
                        return (
                            <Link
                                to={'/showpage/' + bird.name}
                                onClick={() => this.props.setBird(bird)}
                            >
                                <img
                                    className="pics"
                                    src={bird.image}
                                    alt={bird.name}
                                />
                            </Link>
                        );
                    })}
                </main>
            </>
        );
    }
}
export default Home;
