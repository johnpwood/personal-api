const user = require('../user.js')
const skills = require('../skills.js')
module.exports = {
  getName(req, res, next){
    res.json({name: user.name})
  },
  getLocation(req, res, next){
    res.json({location: user.location})
  },
  getOccupations(req, res, next){
    if(req.query.order == "desc"){
      res.json({occupations: user.occupations.sort((a,b)=>a<b)})
      next()
    }
    if(req.query.order == "asc"){
      res.json({occupations: user.occupations.sort()})
      next()
    }
    res.json({occupations: user.occupations})
  },
  getLatestOccupation(req, res, next){
    res.json({latestOccupation: user.occupations.slice(-1)})
  },
  getHobbies(req, res, next){
    res.json({hobbies: user.hobbies})
  },
  getHobbiesByType(req, res, next){
    res.json(user.hobbies.filter(x=>x.type==req.params.type))
  },
  getFamily(req, res, next){
    if(req.query.relation){
      res.json(user.family.filter(x=>x.relation===req.query.relation))
    }
    res.json({family:user.family})
  },
  getFamilyByGender(req, res, next){
    res.json(user.family.filter(x=>x.gender==req.params.gender))
  },
  getRestaurants(req, res, next){
    if(req.query.rating=="gt:2"){
      res.json({restaurants: user.restaurants.filter(x=>x.rating>2)})
    }else{
    res.json({restaurants: user.restaurants})
    }
  },
  getRestaurantsByName(req, res, next){
    res.json(user.restaurants.filter(x=>x.name==req.params.name))
  },
  putName(req, res, next){
    user.name = req.body.name
    res.json(user)
  },
  putLocation(req, res, next){
    user.location = req.body.location
    res.json(user)
  },
  putHobby(req, res, next){
    user.hobbies.push(req.body)
    res.json(user.hobbies)
  },
  putOccupation(req, res, next){
    user.occupations.push(req.body.occupation)
    res.json(user.occupations)
  },
  putFamily(req, res, next){
    user.family.push(req.body)
    res.json(user.family)
  },
  putRestaurant(req, res, next){
    user.restaurants.push(req.body)
    res.json(user.restaurants)
  },
  getSkills(req, res, next){
    if(req.query.experience){
      res.json(skills.skills.filter(x=>x.experience == req.query.experience))
    }
    res.json(skills.skills)
  },
  putSkills(req, res, next){
    skills.skills.push({
      name: req.body.name,
      experience: req.body.experience,
      id: skills.skills.length+1})
    res.json(skills.skills)
  }
}
