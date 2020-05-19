use sample_mflix

var flicks = db.movies.find( { "imdb.rating" : { $gt: 7 }}).limit(2)

flicks.objsLeftInBatch()

	while(flicks.hasNext()) {
        print("Records remaining: " + flicks.objsLeftInBatch())
		print(tojson(flicks.next()))
	
	}