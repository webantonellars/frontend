import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillssComponent } from './skillss.component';

describe('SkillssComponent', () => {
  let component: SkillssComponent;
  let fixture: ComponentFixture<SkillssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
