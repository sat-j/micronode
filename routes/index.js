var express = require('express');
var pdf2json = require('pdf2json');
var nodeUtil = require("util"),
            fs = require('fs'),
            _ = require('underscore'),
            PDFParser = require("pdf2json/PDFParser");
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Workflow Express' });

        /*var pdfParser = new PDFParser();
		var _onPDFBinDataReady = function (pdf) {
		  console.log('Loaded pdf:\n');
		  for (var i in pdf.data.Pages) {

		    var page = pdf.data.Pages[i];
		    //console.log(page);
		    //console.log(page.Texts);
		    for (var j in page.Texts) { 
		      var text = page.Texts[j];
		      //console.log(text);
		      //console.log(text.R[0].T);
		    }
		  }
		  //console.log(JSON.stringify(pdf));
		};

		// Create an error handling function
		var _onPDFBinDataError = function (error) {
		  console.log(error);
		};
        pdfParser.on("pdfParser_dataReady", _.bind(_onPDFBinDataReady, this));

        pdfParser.on("pdfParser_dataError", _.bind(_onPDFBinDataError, this));
        console.log('>>>Begin Parse');
        //var pdfFilePath = _pdfPathBase + folderName + "/" + pdfId + ".pdf";
        var pdfFilePath = "./tmobile.pdf";

        pdfParser.loadPDF(pdfFilePath);
		console.log('>>>File was good');
		console.log(pdfParser);
        // or call directly with buffer
        fs.readFile(pdfFilePath, function (err, pdfBuffer) {
          if (!err) {
            pdfParser.parseBuffer(pdfBuffer);
            console.log('>>>parsed');
          }
        })*/
});


router.get('/hello',function(req,res,next){
	res.render('hello',{ title : 'Hello folks!' })
});

module.exports = router;
