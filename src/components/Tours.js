import Card from './Card'
//removeTour nu ethe kyu define kitta
// kyuki eh prop bnke aa reha picho
function Tours({tours , removeTour}) {
    return (
        <div className='container'>
            <h2 className='title'>Plan With Daman</h2>

            <div className='cards'>
                {
                    // tour is returning data for one city (one object)
                    // and tours has 7 city o it will call card for 7 times
                    // ...tours says that pure object di copy pass krti (cloning)
                    tours.map( (tour) => {
                        // jdo vi list teh map launa then always pass a key of unique identifier
                        // if not any unique identifier then pass key
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>

        </div>
    );
}

export default Tours;