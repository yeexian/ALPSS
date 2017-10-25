function updatePlan(Plan){
	
var conn = $.hdb.getConnection();
var output = JSON.stringify(Plan);
var fnUpdatePlan = conn.loadProcedure("alpss.alpssdb::updateplan");
var result = fnUpdatePlan({IM_PLANID: Plan.planid, IM_DESC: Plan.desc, IM_FISCALYEARID: Plan.fiscalyearid, IM_YEAR: Plan.year, IM_AMOUNT: Plan.amount, IM_STATUS: Plan.status, IM_JSONSTRING: Plan.jsonstring});

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

var output = updatePlan(plan);

$.response.contentType = "application/json";
$.response.setBody(output.body);
$.response.status = output.status;