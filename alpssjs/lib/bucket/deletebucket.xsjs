function deleteBucket(Bucket){
	
var conn = $.hdb.getConnection();
var output = JSON.stringify(Bucket);
var fnDeleteBucket = conn.loadProcedure("alpss.alpssdb::deletebucket");
var result = fnDeleteBucket({IM_BUCKETID: Bucket.bucketid});

conn.commit();
conn.close();

if (result && result.EX_ERROR !=null) {
	return {body: result, status: $.net.http.BAD_REQUEST};
}else {
	return {body: output, status: $.net.http.CREATED};
}	
	
}

var body = $.request.body.asString();
var bucket = JSON.parse(body);

var output = deleteBucket(bucket);

$.response.contentType = "application/json";
$.response.setBody(output.body);
$.response.status = output.status;