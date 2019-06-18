

class TopicController {
    constructor() {

    }
   
    getTopic = (req, res) => {
        console.log("TopicController :: getTopic");
        res.render('index', { title: 'Topic get Url' });
    }

    addTopic = () => {
        console.log("TopicController :: addTopic");
    }
}

export default new TopicController();