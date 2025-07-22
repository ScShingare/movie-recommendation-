const { resolve } = require("path");
let conn=require("../../db.js");

exports.addregisterdata=((...register)=>{

    return new Promise((resolve,reject)=>{
        conn.query("insert into userregister values('0',?,?,?,?,?,?,?)",[...register],(err,result)=>{
             if(err){
                reject(err);
             }else{
                resolve(result);
             }
        });
    });
});

exports.validuserdata=((...uservalidate)=>{
  return new Promise((resolve,reject)=>{
     conn.query("select * from userregister where username=? and password=?",[...uservalidate],(err,result)=>{
      if(err)
      {
        reject(err);

      }else{
        resolve(result);
        
      }
     });
  });
});

exports.admindelete=((...userdel)=>{
   return new Promise((resolve,reject)=>{
      conn.query("delete from userregister where uid=?",[...userdel],(err,result)=>{
       if(err){
        reject(err);
       }else{
        resolve(result);
       }
      });
   });
});

exports.updateuser=((...userupdate)=>{
   return new Promise((resolve,result)=>{
     conn.query("select * from userregister where uid=?",[...userupdate],(err,result)=>{
         if(err){
            reject(err);
         }else{
            resolve(result);
         }
     });
   });
});

exports.finalupdateuser=((...finaluser)=>{
 return new Promise((resolve,reject)=>{
conn.query("update userregister set username=?,password=?,confirmpassword=?,contact=?,city=? where uid=?",[...finaluser],(err,result)=>{
       if(err)
       {
         reject(err);
   
       }else{
         resolve(result);
           
       }
 });
 });
});

exports.validadmindata=((...validadmin)=>{
  return new Promise((resolve,reject)=>{
    conn.query("select * from userregister where username=? and password=?",[...validadmin],(err,result)=>{
       if(err)
       {
        reject(err);
       }else{
        resolve(result);
       }
    });
  });
});

exports.viewalluser=(()=>{
  return new Promise((resolve,reject)=>{
    conn.query("select * from userregister ",(err,result)=>{
        if(err)
        {
         reject(err);
        }else{
         resolve(result);
        
        }
    });
  });
});

exports.allmovies=(()=>{
   return new Promise((resolve,reject)=>{
    conn.query("select count(*) from movies ",(err,result)=>{
        if(err)
        {
         reject(err);
        }else{
         resolve(result);
        
        }
    });
  });
})



exports.savemoviee=((...savemovi)=>{
  return new Promise((resolve,reject)=>{
    conn.query("insert into movies (title, description, release_date, genre, director, language, country,budget, revenue, runtime, poster_url, trailer_url, movie_url) values(?,?,?,?,?,?,?,?,?,?,?,?,?)",[...savemovi],(err,result)=>{
         if(err)
         {
          reject(err);
         }else{
          resolve(result);
         }
    });
  });
});


exports.viewmovie=((req,res)=>{
  return new Promise((resolve,reject)=>{
    conn.query("select * from movies",(err,result)=>{
       if(err){
        reject(err);
       }else{
        resolve(result);
       }
    });
  });
});

exports.getAllMovies = () => {
  return new Promise((resolve, reject) => {
    conn.query("SELECT title, poster_url, trailer_url, movie_url FROM movies", (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
     });
   });
};

exports.searchmovie=((searcmovie)=>{
 return new Promise((resolve,reject)=>{
   conn.query("select * from movies where title like ? or genre like ? ",[`%${searcmovie}%`,`%${searcmovie}%`],(err,result)=>{
    if(err)
    {
      reject(err);
    }else{
      resolve(result);
    }
   });
 });
});

exports.deletemovie=((...delmove)=>{
  return new Promise((resolve,reject)=>{
    conn.query("delete from movies where mid=?",[...delmove],(err,result)=>{
      if(err)
      {
        reject(err);
      }else{
        resolve(result);
      }
    });
  });
});

exports.updatemovie=((...updatemove)=>{
  return new Promise((resolve,reject)=>{
   conn.query("select * from movies where mid=?",[...updatemove],(err,result)=>{
    if(err){
      reject(err);
    }else{
      resolve(result);
    }
   });  
  });
});

exports.finalupdate=((...finalmove)=>{
 return new Promise((resolve,reject)=>{
 conn.query("update movies set title=?,description=?, release_date=?, genre=?, director=?, language=?, country=?,budget=?, revenue=?, runtime=?, poster_url=?, trailer_url=?, movie_url=? where mid=? ",[...finalmove],(err,result)=>{
  if(err)
  {
    reject(err);
  }else{
    resolve(result);
  }
 });
 });
});

exports.ratingmovie=((...ratemove)=>{
  return new Promise((resolve,reject)=>{
     conn.query("select * from movies where mid=?",[...ratemove],(err,result)=>{
       if(err)
       {
        reject(err);
       }else{
        resolve(result);
       }
     });
  });
});

exports.saverating=((...saverate)=>{
 return new Promise((resolve,reject)=>{
 conn.query("insert into ratings(uid,mid,rating,review)values(?,?,?,?)",[...saverate],(err,result)=>{
   if(err)
   {
    reject(err);
   }else{
    resolve(result);
   }
 });
 });
});

exports.viewreview=((req,res)=>{
  return new Promise((resolve,reject)=>{
   conn.query("select u.username,m.title,r.rating,r.review from userregister u inner join ratings r on u.uid=r.uid inner join movies m on m.mid=r.mid  ",(err,result)=>{
    if(err)
    {
      reject(err);
    }else{
      resolve(result);
    }
   });
  });
});

exports.savewatch=((...watch)=>{
  return new Promise((resolve,reject)=>{
   conn.query("insert into watchlist(uid,mid)values(?,?)",[...watch],(err,result)=>{
   if(err)
   {
    reject(err);
   }else{
    resolve(result);
   }
   });
  });
});

exports.viewwatchlist=((...wause)=>{
  return new Promise((resolve,reject)=>{
   conn.query("select m.mid,m.title,m.poster_url,m.trailer_url,m.movie_url from movies m join watchlist w on m.mid=w.mid join userregister u on w.uid=u.uid where u.uid=?",[...wause],(err,result)=>{
    if(err)
    {
      reject(err);
    }else{
      resolve(result);
    }
   });
  });
});

exports.delewat=((...delw)=>{
  return new Promise((resolve,reject)=>{
  conn.query("delete from watchlist where mid=? and uid=?",[...delw],(err,result)=>{
   if(err){
    reject(err);
   }else{
    resolve(result);
   }
  });
  });
});

exports.addrecommend=((...addreco)=>{
 return new Promise((resolve,reject)=>{
 conn.query("insert into recommendations(uid,mid)values(?,?) ",[...addreco],(err,result)=>{
  if(err){
    reject(err);
  }else{
    resolve(result);
  }
 });
 });
});

exports.viewrecommended=((req,res)=>{
  return new Promise((resolve,reject)=>{
  conn.query("select m.title,m.poster_url,m.trailer_url,m.movie_url from ratings r join movies m on r.mid=m.mid join recommendations re on re.mid=m.mid group by r.mid having count(r.rating)>=4 and avg(r.rating)>=4",(err,result)=>{
  if(err)
  {
    reject(err);
  }else{
    resolve(result);
  }
  }); 
  });
})
