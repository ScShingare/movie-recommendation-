let express=require("express");
let router=express.Router();

let adminctrl=require("../controller/adminctrl.js");


router.get("/",adminctrl.adminctrl);
//user login
router.get("/user",adminctrl.userlogin);
router.get("/usersignup",adminctrl.usersignup);

router.post("/useradd",adminctrl.userregister);
router.post("/validuser",adminctrl.validuserdata);


router.get("/updateuser",adminctrl.updateuser);
router.post("/finaluserupdate",adminctrl.finalupdateuser);

//admin login
router.get("/adminlogin",adminctrl.adminlogin);
router.post("/validadminn",adminctrl.validadmin);
router.get("/useradminview",adminctrl.viewuseradmin);
router.get("/delbyuser",adminctrl.deleteadmin);
router.get("/updateadmin",adminctrl.updateadmin);
router.post("/finaladminupdate",adminctrl.finalupdateadmin);

//movieadd
router.get("/moviee",adminctrl.addmovie);
router.post("/savemovie",adminctrl.savemovie);
router.get("/viewmovie",adminctrl.viewmovie);
router.get("/userviewmove",adminctrl.userviewmovie);
router.get("/moviesearch",adminctrl.moviesearch);
router.get("/usermovies", adminctrl.usermovies);

router.get("/deletemovie",adminctrl.deletemovies);
router.get("/updatemovie",adminctrl.updatemovie);
router.post("/finalupdatemovie",adminctrl.finalupdatemovie);

router.get("/home2",adminctrl.home2);


//ratinguser
router.get("/ratinguser",adminctrl.ratinguser);
router.post("/saverating",adminctrl.saverating);
router.get("/reviewmovie",adminctrl.reviewmovie);

//watchlist

router.get("/watchlist",adminctrl.watchlist);
router.post("/savewatchlist",adminctrl.savewatchlistt);
router.get("/mywatchlist",adminctrl.viewwatchlist);
router.get("/deletewatch",adminctrl.deletewatchlist);

//recommendation
router.get("/recommended",adminctrl.addrecommend);
router.post("/saverecommend",adminctrl.saverecommend);
router.get("/viewrecommended",adminctrl.viewreco);
//search movie
//Movie Recommendations Route
router.get("/smart", adminctrl.smartsearch);
router.get("/search", adminctrl.searchMovies);

router.get("/privacy",adminctrl.privacypolicy);
router.get("/about",adminctrl.aboutus);


module.exports=router;