function updateBucket(Bucket){
	
var conn = $.hdb.getConnection();
var output = JSON.stringify(Bucket);
var fnUpdateBucket = conn.loadProcedure("alpss.alpssdb::updatebucket");
var result = fnUpdateBucket({IM_BUCKETID: Bucket.bucketid, IM_PLANID: Bucket.planid, IM_DESC: Bucket.desc, IM_BUCKETTYPEID: Bucket.buckettypeid, IM_SUPERIORBUCKETID: Bucket.superiorbucketid, IM_PLANNINGUNITID: Bucket.planningunitid, IM_QUANTITY: Bucket.quantity});

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

var output = updateBucket(bucket);

$.response.contentType = "application/json";
$.response.setBody(output.body);
$.response.status = output.status;