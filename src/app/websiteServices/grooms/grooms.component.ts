import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PersonalInfoService } from '../../services/personal-info.service';
import { FamillyInfoService } from '../../services/familly-info.service';
import { EducationInfoService } from '../../services/education-info.service';
import { UserinfoService } from '../../services/userinfo.service';

@Component({
  selector: 'app-grooms',
  templateUrl: './grooms.component.html',
  styleUrls: ['./grooms.component.css']
})
export class GroomsComponent implements OnInit {
  personalInfo: any = [];
  users: any = [];
  educationInfo: any = [];
  familyInfo: any = [];



  constructor(
    private userService: UserinfoService,
    private educationCareerService: EducationInfoService,
    private familyInfoService: FamillyInfoService,
    private personalInfoService: PersonalInfoService,
    private router : Router,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {
    personalInfos: this.personalInfoService.getAllPersonalInfo()
    

    forkJoin({
      UserInfo: this.userService.getAllUser(), 
      EducationInfo: this.educationCareerService.getAllEducation(),
      familyInfos: this.familyInfoService.getAllFamily(),
      personalInfos: this.personalInfoService.getAllPersonalInfo()
    }).subscribe(({ UserInfo, EducationInfo, familyInfos, personalInfos }) => {
      this.users = UserInfo.filter(userInfo => userInfo.gender === 'Male').map(user => {
        const educationCareer = EducationInfo.find(ec => ec.registration.rid === user.registration.rid);
        const familyInfo = familyInfos.find(fi => fi.registration.rid === user.registration.rid);
        const personalInfo = personalInfos.find(pi => pi.registration.rid === user.registration.rid);
        console.log(personalInfo)
        return {
          firstName: user.firstName,
          lastName: user.lastName,
          age: user.age,
          dateOfBirth : user.dateOfBirth,
          gender: user.gender,
          educationCareer: {
            educationLevel: educationCareer?.educationLevel || 'Not available',
            educationFiled: educationCareer?.educationFiled || 'Not available'
          },
          familyInfo: {
            familyStatus: familyInfo?.familyStatus || 'Not available',
            familyType: familyInfo?.familyType || 'Not available',
            fatherName: familyInfo?.fatherName || 'Not available'
          },
          personalInfo: personalInfo || null
        };
      });
    });
  }

  viewDetails(user: any): void {
    this.router.navigate(['/groom-information'], {
      state: { user }
    });
}
}
