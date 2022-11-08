import NewsItem from '../components/NewsItem';
import Form from '../components/Form';

function NewsFeed() {
    const jsonResponse = {
        "newsfeed": [
            {"name": 'Mark Zuckerberg',
            "action": 'is making a metaverse.'},
            {"name": 'Bill Gates',
            "action": 'is making a cure for malaria.'},
            {"name": 'Elon Musk',
            "action": 'is making a fool.'},
        ]
    };

    const data = jsonResponse['newsfeed'];
    return(

        <div className='NewsFeed'>

            <Form name={"Activity Form"}/>

            {data.map((item, index) => { 
                return(
                    <NewsItem 
                        key={index} 
                        name={item['name']} 
                        action={item['action'] 
                    }/> 
                ) 
            })}
            
        </div>
    )
}

export default NewsFeed;