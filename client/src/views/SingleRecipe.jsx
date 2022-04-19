import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const SingleRecipe = (props) => {

    const [recipe, setRecipe] = useState([]);
    const { _id } = useParams({})
    // const history = useHistory();

    useEffect(() => {
        document.title = "NutritarianEats"
        axios.get(`http://localhost:8000/api/recipes/${_id}`)
            .then(res => {
                // console.log(res.data.results);
                setRecipe(res.data.results);
            })
            .catch(err => console.log(err))
    }, [_id]);

    return (


        <div className="container">
            <div className="container-xxl px-md-5 bg-white">

                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{recipe.title}</li>
                    </ol>
                </nav>

                <div className="row">

                    <div className="col-12 col-md-4">
                        <img src={`${recipe.imgUrl}`} alt="recipe" Loading="lazy" className="img-fluid sticky-top " style={{ top: "20px", }} />
                    </div>

                    <div className="col-12 col-md-8">
                        {/* first row */}
                        <div className="row">
                            <div className="col-12"><h1>{recipe.title}</h1></div>
                            <div className="col-12 mb-4">
                                <i className="bi bi-tag mx-2"></i>{recipe.cuisine}
                                {recipe?.tags?.map((value, i) => {
                                    return <div className="col-12 mb-4" value={value} key={i} >
                                        <i className="bi bi-tag mx-2"></i>
                                        {value.name}
                                    </div>
                                })
                                }
                            </div>
                            <div className="col-12 mb-4"><h4>Description</h4> {recipe.description}</div>

                            <div className="col-12 mb-4"> Source: {recipe.source}</div>
                            <div className="col-12 mb-2">
                                <h5>GBOMBS:</h5>
                                <ul>
                                    {recipe?.gbombs?.map((value, i) => {
                                        return <div className="row" value={value} key={i}>· {value.name} </div>
                                    })
                                    }
                                </ul>
                            </div>


                            <div className="row pt-2">
                                <div className="col-12"><h4>Instructions</h4> {recipe.instructions}</div>
                            </div>

                        </div>
                        {/* first row end */}

                        {/* second row begin */}
                        <div className="row pt-4">
                            <div className="col-12">
                                <h4 className="mb-2">Ingredients</h4>
                                <ul className="list-group list-group-flush mb-4">

                                    {recipe?.ingredientsList?.map((value, i) => {
                                        if (value.unit === "none") {
                                            value.unit = "";
                                        }
                                        if (value.ingredient.includes("Optional")) {
                                            value.quantity = "";
                                        }
                                        return <li className="list-group-item" value={value} key={i}> {value.quantity} {value.unit} {value.ingredient}</li>
                                    })
                                    }

                                </ul>
                            </div>
                            <div className="col-12 mb-4"> Author: {recipe.author}</div>

                            <div>
                                <Link to={`/recipes/${_id}/edit`} className="mb-4" >Update</Link>
                            </div>

                        </div>
                    </div>
                </div>
                <footer className="py-5">
                    Build by: Jen E.
                </footer>
            </div>

        </div>



    )
}

export default SingleRecipe;