import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/Models/Recipe';

@Component({
  selector: 'app-small-recipe',
  templateUrl: './small-recipe.component.html',
  styleUrls: ['./small-recipe.component.scss']
})
export class SmallRecipeComponent implements OnInit {
@Input()
  myRecipe:Recipe;
  constructor(public router:Router) { 
  }
  details(id){
    if(sessionStorage.getItem("user")==null){
      this.router.navigate(['login']);
    }else this.router.navigate(['recipe-details',id]);
    
  }
  
  
  ngOnInit(): void {
  }

}
