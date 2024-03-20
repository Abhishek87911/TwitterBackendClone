const { TweetRepository, HashtagRepository } = require('../repository/index');



class TweetService {
    

   constructor() {
    this.tweetRepository = new TweetRepository();
    this.hastagRepository = new HashtagRepository();
   }

   async create(data) {
    const content = data.content;
    const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag)=> tag.substring(1)); //this regex extract hashtags
    const tweet = await this.tweetRepository.create(data);
    let alreadyPresentTags = await this.hastagRepository.findByName(tags);
   
    let titleOfPresentTags = alreadyPresentTags.map((tag) => tag.title);
    
    let newTags = tags.filter(tag => !titleOfPresentTags.includes(tag));
    
    newTags = newTags.map((tag) => {
        return {
        title: tag,
        tweets: [tweet.id]
    }
    });

    
    await this.hastagRepository.bulkCreate(newTags);
    alreadyPresentTags.forEach((tag) => {
        tag.tweets.push(tweet.id); 
        tag.save();
    })
    return tweet;
    
    // to do create hashTag and add here
    /*
     1. bulkcreate in mongoose
     2. filter title of hashtag based on multiple tags(we will use indexes)
     3. how to add tweet id inside all the hashtag
     */
   }
}

module.exports = TweetService;

