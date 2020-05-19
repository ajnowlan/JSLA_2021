use test

// Insert some sample data
db.mockData.insert({nome:"Test1",age:30})
db.mockData.insert({nome:"Test2",age:31})
db.mockData.insert({nome:"Test3",age:32})
db.mockData.insert({nome:"Test4",age:33})
db.mockData.insert({nome:"Test5",age:34})
db.mockData.insert({nome:"Test6",age:35})
db.mockData.insert({nome:"Test7",age:36})
db.mockData.insert({nome:"Test8",age:37})
db.mockData.insert({nome:"Test9",age:38})
db.mockData.insert({nome:"Test10",age:39})
  
db.mockData.find({}) 

function myZip() {  
    return Math.floor(Math.random() * 90000) + 10000;
  }

  
//
// Iterate through the documents and add the ZipCode
//
db.mockData.find({}).forEach((it)=> {
  db.mockData.update({"_id": it._id},{$set: { zip: myZip() }})  
}) 

//
// Check the update
db.mockData.find({}).pretty()

function myAreacode() {  
    return Math.floor(Math.random() * 900) + 100;
  }

db.mockData.find({}).forEach((it)=> {
  it.areaCode = myAreacode()
  db.mockData.save(it)
})


// Command to Drop test data collection
// db.mockData.drop()