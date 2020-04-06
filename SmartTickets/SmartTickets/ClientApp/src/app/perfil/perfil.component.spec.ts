/// <reference path="../../../../ClientApp/node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { PerfilComponent } from './perfil.component';

let component: PerfilComponent;
let fixture: ComponentFixture<PerfilComponent>;

describe('perfil component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PerfilComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(PerfilComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
