

class TopicVallidation {

    constructor() { 
    }

    getTopic = (req, res, next) => {

        console.log(" FILE  TopicVallidation :: getTopic");
        next();
    }

    addTopic = () => {
        console.log("TopicVallidation :: addTopic");
    }
}

export default new TopicVallidation();