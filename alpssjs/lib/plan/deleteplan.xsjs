function deletePlan(Plan){
	
var conn = $.hdb.getConnection();
var output = JSON.stringify(Plan);
var fnDeletePlan = conn.loadProcedure("alpss.alpssdb::deleteplan");
var result = fnDeletePlan({IM_PLANID: Plan.planid});

conn.commit();
conn.close();

if (result && result.EX_ERROR !=null) {
	return {body: result, status: $.net.http.BAD_REQUEST};
}else {
	return {body: output, status: $.net.http.CREATED};
}
	
}

var body = $.request.body.asString();
var plan = JSON.parse(body);

var output = deletePlan(plan);

$.response.contentType = "application/json";
$.response.setBody(output.body);
$.response.status = output.status;