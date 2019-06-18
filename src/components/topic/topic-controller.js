

class TopicController {
    constructor() {

    }
   
    getTopic = (req, res) => { 
        console.log("req.query==>"+req.query);
        console.log("TopicController :: getTopic");
        res.render('index', { title: 'Topic get Url  query ==> ' + JSON.stringify(req.query)});
        
    }

    addTopic = () => {
        console.log("TopicController :: addTopic");
    }
}

export default new TopicController();