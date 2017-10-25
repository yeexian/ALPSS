var oPlanDialog;
var oBucketDialog;

function createPlan() {
	
				var planid = "Plan002";
				var desc = "Planning Two";
				var fiscalyearid = "FY17";
				var year = "2017";
				var amount = 71.23;
				var status = "inactive";
				var jsonstring = '[{"Planid":"Plan001","Description":"Planning One","Year":"2017","BudgetAmount":23.64,"Status":"Pending Approval","FiscalYearId":"FY17","PlanningBucket":[{"PlanningBucketId":"Bucket001","SuperiorBucketId":"","Description":"Bucket One","Quantity":1,"PlanningUnit":[],"PlanningBucket":[{"PlanningBucketId":"Bucket003","SuperiorBucketId":"Bucket001","Description":"Bucket Three","Quantity":3,"PlanningUnit":[],"PlanningBucket":[]},{"PlanningBucketId":"Bucket004","SuperiorBucketId":"Bucket001","Description":"Bucket Four","Quantity":4,"PlanningUnit":[],"PlanningBucket":[]}]},{"PlanningBucketId":"Bucket002","SuperiorBucketId":"","Description":"Bucket Two","Quantity":2,"PlanningBucket":[{"PlanningBucketId":"Bucket005","SuperiorBucketId":"Bucket002","Description":"Bucket Five","Quantity":5,"PlanningUnit":[],"PlanningBucket":[]},{"PlanningBucketId":"Bucket006","SuperiorBucketId":"Bucket002","Description":"Bucket Six","Quantity":6,"PlanningUnit":[],"PlanningBucket":[]}]}]}]';

				var planobject = {};
				planobject.planid = planid;
				planobject.desc = desc;
				planobject.fiscalyearid = fiscalyearid;
				planobject.year = year;
				planobject.amount = amount;
				planobject.status = status;
				planobject.jsonstring = jsonstring;
				
				var insertdata = JSON.stringify(planobject);   
				
	            $.ajax({
	
	               type: "POST",
	
	               url: "plan/postplan.xsjs",
	
	               contentType: "application/json",
	
	               data: insertdata,
	
	               dataType: "json",
	
	               crossDomain: true,
	
	               success: function(data) {
	
	                  alert("Data inserted successfully");
	
	               },
	
	               error: function(data) {
	
	                  var message = JSON.stringify(data);
	
	                  alert(message);
	
	               }
	
	            });		
	
	
}

function deletePlan() {
	
	var planid = "Plan002";
	var planobject = {};
	
	planobject.planid = planid;
	
	var insertdata = JSON.stringify(planobject);
	
	$.ajax({
	
	               type: "POST",
	
	               url: "plan/deleteplan.xsjs",
	
	               contentType: "application/json",
	
	               data: insertdata,
	
	               dataType: "json",
	
	               crossDomain: true,
	
	               success: function(data) {
	
	                  alert("Data deleted successfully");
	
	               },
	
	               error: function(data) {
	
	                  var message = JSON.stringify(data);
	
	                  alert(message);
	
	               }
	
	            });		
	
	
}

function updatePlan() {
	
	  if (oPlanDialog) {

    oPlanDialog.open();

	 } else {

     oPlanDialog = new sap.ui.commons.Dialog({

         width: "400px", // sap.ui.core.CSSSize

         height: "550px", // sap.ui.core.CSSSize

         title: "Plan Details", // string

         applyContentPadding: true, // boolean

         modal: true, // boolean

         content: [new sap.ui.commons.form.SimpleForm({

            content: [

               new sap.ui.core.Title({ text: "Plan" }),

               new sap.ui.commons.Label({ text: "Plan ID"}),

               new sap.ui.commons.TextField({ value: "", id: "planid" }),

               new sap.ui.commons.Label({ text: "Description" }),

               new sap.ui.commons.TextField({ value: "", id: "desc" }),
               
               new sap.ui.commons.Label({ text: "Fiscal Year ID" }),

               new sap.ui.commons.TextField({ value: "", id: "fiscalyearid" }),
               
               new sap.ui.commons.Label({ text: "Year" }),

               new sap.ui.commons.TextField({ value: "", id: "year" }),
               
               new sap.ui.commons.Label({ text: "Budget Amount" }),

               new sap.ui.commons.TextField({ value: "", id: "budgetamount" }),
               
               new sap.ui.commons.Label({ text: "Status" }),

               new sap.ui.commons.TextField({ value: "", id: "status" }),
               
               new sap.ui.commons.Label({ text: "HierarchyJSON" }),

               new sap.ui.commons.TextField({ value: "", id: "hierarchyjson" })
               

            ]

         })] // sap.ui.core.Control

  });

     oPlanDialog.addButton(new sap.ui.commons.Button({

         text: "OK",

         press: function() {

            var planid = sap.ui.getCore().byId("planid").getValue();

            var desc = sap.ui.getCore().byId("desc").getValue();
            
            var fiscalyearid = sap.ui.getCore().byId("fiscalyearid").getValue();
            
            var year = sap.ui.getCore().byId("year").getValue();
            
            var amount = sap.ui.getCore().byId("budgetamount").getValue();
            
            var status = sap.ui.getCore().byId("status").getValue();
            
            var jsonstring = sap.ui.getCore().byId("hierarchyjson").getValue();

            var planobject = {};

			planobject.planid = planid;
			planobject.desc = desc;
			planobject.fiscalyearid = fiscalyearid;
			planobject.year = year;
			planobject.amount = amount;
			planobject.status = status;
			planobject.jsonstring = jsonstring;
				

            var insertdata = JSON.stringify(planobject);

         

            $.ajax({

               type: "POST",

               url: "plan/updateplan.xsjs",

               contentType: "application/json",

               data: insertdata,

               dataType: "json",

               crossDomain: true,

               success: function(data) {

                  oPlanDialog.close();
				
                  alert("Data updated successfully");

               },

               error: function(data) {

                  var message = JSON.stringify(data);

                  alert(message);

               }

            });

         }

   }));

   oPlanDialog.open();

} 
	
}

function createBucket() {
	
	
	var bucketid = "Bucket007";
	var planid = "Plan001";
	var desc = "Testing Add Bucket";
	var buckettypeid = "BT001";
	var superiorbucketid = "Bucket002";
	var planningunitid = "PU001";
	var quantity = 5;
	
	
	
	var bucketobject = {};
	
	bucketobject.bucketid = bucketid;
	bucketobject.planid = planid;
	bucketobject.desc = desc;
	bucketobject.buckettypeid = buckettypeid;
	bucketobject.superiorbucketid = superiorbucketid;
	bucketobject.planningunitid = planningunitid;
	bucketobject.quantity = quantity;
	
	var insertdata = JSON.stringify(bucketobject);
	
	$.ajax({
	
	               type: "POST",
	
	               url: "bucket/postbucket.xsjs",
	
	               contentType: "application/json",
	
	               data: insertdata,
	
	               dataType: "json",
	
	               crossDomain: true,
	
	               success: function(data) {
	
	                  alert("Data inserted successfully");
	
	               },
	
	               error: function(data) {
	
	                  var message = JSON.stringify(data);
	
	                  alert(message);
	
	               }
	
	            });		
}

function deleteBucket() {
	
	
	var bucketid = "Bucket007";
	var bucketobject = {};
	
	bucketobject.bucketid = bucketid;
	
	var insertdata = JSON.stringify(bucketobject);
	
	$.ajax({
	
	               type: "POST",
	
	               url: "bucket/deletebucket.xsjs",
	
	               contentType: "application/json",
	
	               data: insertdata,
	
	               dataType: "json",
	
	               crossDomain: true,
	
	               success: function(data) {
	
	                  alert("Data deleted successfully");
	
	               },
	
	               error: function(data) {
	
	                  var message = JSON.stringify(data);
	
	                  alert(message);
	
	               }
	
	            });		
}

function updateBucket() {
	
	  if (oBucketDialog) {

    oBucketDialog.open();

	 } else {

     oBucketDialog = new sap.ui.commons.Dialog({

         width: "400px", // sap.ui.core.CSSSize

         height: "550px", // sap.ui.core.CSSSize

         title: "Bucket Details", // string

         applyContentPadding: true, // boolean

         modal: true, // boolean

         content: [new sap.ui.commons.form.SimpleForm({

            content: [

               new sap.ui.core.Title({ text: "Bucket" }),

               new sap.ui.commons.Label({ text: "Bucket ID"}),

               new sap.ui.commons.TextField({ value: "", id: "bucketid" }),
               
               new sap.ui.commons.Label({ text: "Plan ID"}),

               new sap.ui.commons.TextField({ value: "", id: "bplanid" }),

               new sap.ui.commons.Label({ text: "Description" }),

               new sap.ui.commons.TextField({ value: "", id: "bdesc" }),
               
               new sap.ui.commons.Label({ text: "Bucket Type ID" }),

               new sap.ui.commons.TextField({ value: "", id: "buckettypeid" }),
               
               new sap.ui.commons.Label({ text: "Superior Bucket ID" }),

               new sap.ui.commons.TextField({ value: "", id: "superiorbucketid" }),
               
               new sap.ui.commons.Label({ text: "Planning Unit ID" }),

               new sap.ui.commons.TextField({ value: "", id: "planningunitid" }),
               
               new sap.ui.commons.Label({ text: "Quantity" }),

               new sap.ui.commons.TextField({ value: "", id: "quantity" })

            ]

         })] // sap.ui.core.Control

  });

     oBucketDialog.addButton(new sap.ui.commons.Button({

         text: "OK",

         press: function() {

			var bucketid = sap.ui.getCore().byId("bucketid").getValue();

            var planid = sap.ui.getCore().byId("bplanid").getValue();

            var desc = sap.ui.getCore().byId("bdesc").getValue();
            
            var buckettypeid = sap.ui.getCore().byId("buckettypeid").getValue();
            
            var superiorbucketid = sap.ui.getCore().byId("superiorbucketid").getValue();
            
            var planningunitid = sap.ui.getCore().byId("planningunitid").getValue();
            
            var quantity = sap.ui.getCore().byId("quantity").getValue();
            
            var bucketobject = {};

			bucketobject.bucketid = bucketid;
			bucketobject.planid = planid;
			bucketobject.desc = desc;
			bucketobject.buckettypeid = buckettypeid;
			bucketobject.superiorbucketid = superiorbucketid;
			bucketobject.planningunitid = planningunitid;
			bucketobject.quantity = quantity;


            var insertdata = JSON.stringify(bucketobject);

         

            $.ajax({

               type: "POST",

               url: "bucket/updatebucket.xsjs",

               contentType: "application/json",

               data: insertdata,

               dataType: "json",

               crossDomain: true,

               success: function(data) {
 
                   oBucketDialog.close();
				
                  alert("Data updated successfully");

               },

               error: function(data) {

                  var message = JSON.stringify(data);

                  alert(message);

               }

            });

         }

   }));

   oBucketDialog.open();

} 	
}