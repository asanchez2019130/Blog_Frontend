import Yo from '../assets/img/Yo.jpg'
import "bulma/css/bulma.min.css"



export const YoAnderson = ({ }) => {
    return (
        <div className="columns is-centered">
            <div className="column is-three-quarters">
                <div className="box has-text-centered">
                    <figure className="">
                        <img src={Yo} alt="Anderson Uriel Sanchez Rogel" width="30%"/>
                    </figure>
                    <p className="title is-3">Anderson Uriel Sanchez Rogel</p>
                    <p className="subtitle is-5">2019130</p>
                </div>
            </div>
        </div>
    );
}