import NewsItem from '../components/NewsItem';

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

    const data = [
        {"name": 'Mark Zuckerberg',
        "action": 'is making a metaverse.'},
        {"name": 'Bill Gates',
        "action": 'is making a cure for malaria.'},
        {"name": 'Elon Musk',
        "action": 'is making a fool.'},
    ];

    return(
        <div className='NewsFeed'>

            {data.map(item => { 
                return(
                    <NewsItem name={item['name']} action={item['action']}/> 
                ) 
            })}

            {/* <NewsItem name={'Mark Zuckerberg'} action={'is making a metaverse.'}/>
            <NewsItem name={'Bill Gates'} action={'is making a cure for malaria.'} />
            <NewsItem name={'Elon Musk'} action={'is making a fool.'} /> */}
        </div>
    )
}

export default NewsFeed;