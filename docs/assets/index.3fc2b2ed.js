import{S as A,P as o,W as n,T as e,A as i,a as t,b as s,M as a,c,d as l,e as E,F as B,f as d}from"./vendor.d04c729e.js";const w=[{text:"We’re living in\na wonderful world:\nThe green parks,\nthe clean streets,\nthe safe communities,\n",color:11267754,x:-40,y:20,z:-60,size:6},{text:"\nChildren are playing in playgrounds\nwith joyful words.\nBut who would remember,\nwhat created all the possibilities?\n",color:16765784,x:40,y:15,z:-20,size:6},{text:"\nIf we travel back in time,\nto the late 19th century,\nWhen the world just started using\nmachinery and technology.\n",color:12105912,x:45,y:-90,z:0,size:6},{text:"\nBut people in the US\nsuffered instead,\nAsking for help from\nthe government, passionately.\n",color:16747146,x:45,y:-140,z:-20,size:6}];function r(A){const o=new c(1),n=new l({color:16777215}),e=new a(o,n),[i,t,s]=Array(3).fill(0).map((()=>E.randFloatSpread(800)));e.position.set(i,t,s),A.add(e)}const{scene:Q,camera:g,renderer:h}=function(){const e=new A,i=new o(75,innerWidth/innerHeight,.5,2e3),t=new n({canvas:document.querySelector("#cv")});return t.setPixelRatio(window.devicePixelRatio),t.setSize(window.innerWidth,window.innerHeight),{scene:e,camera:i,renderer:t}}(),y=new B;let S=!1;y.load("./font1.json",(function(A){w.forEach((o=>{let n=new l({color:o.color}),e=new d(o.text,{font:A,size:o.size,height:1,curveSegments:8}),i=new a(e,n);i.position.setX(o.x),i.position.setY(o.y),i.position.setZ(o.z),Q.add(i)})),S=!0})),function(A){const o=new i(15658734);A.add(o);const n=new t(15658734);n.position.set(100,0,-50),A.add(n);const e=new s(n);A.add(e)}(Q),Q.background=(new e).load("/decades_of_change/assets/space.28241ddd.jpg");const p=function(A){const o=(new e).load("/decades_of_change/assets/pluto.4bf2c93f.jpg"),n=(new e).load("data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEBLAEsAAD/7QN8UGhvdG9zaG9wIDMuMAA4QklNA+kKUHJpbnQgSW5mbwAAAAB4AQAAUABIAEgAAAAAAtoCKP/h/+IC+QJGUAAFKAP8AAEAUABIAEgAAAAAAtoCKAAAAAAAZAAAAAAAAAAAAAAAAScPAAEAAQAAAAAAAAAAAAAAAAASAAACZAAAAxgAAAAAInIAAQABAAMAAgAAAAAAAAAA/lwBAAAAOEJJTQPtClJlc29sdXRpb24AAAAAEAEsAAAAAQABASwAAAABAAE4QklNBA0YRlggR2xvYmFsIExpZ2h0aW5nIEFuZ2xlAAAAAAQAAAAeOEJJTQQZEkZYIEdsb2JhbCBBbHRpdHVkZQAAAAAEAAAAHjhCSU0D8wtQcmludCBGbGFncwAAAAkAAAAAAAAAAAEAOEJJTQQKDkNvcHlyaWdodCBGbGFnAAAAAAEAADhCSU0nEBRKYXBhbmVzZSBQcmludCBGbGFncwAAAAAKAAEAAAAAAAAAAjhCSU0D9BxNb25vY2hyb21lIEhhbGZ0b25lIFNldHRpbmdzAAAAABIANQAAAAEALQAAAAYAAAAAAAE4QklNA/ccTW9ub2Nocm9tZSBUcmFuc2ZlciBTZXR0aW5ncwAAAAAcAAD/////////////////////////////A+gAADhCSU0ECAZHdWlkZXMAAAAAEAAAAAEAAAJAAAACQAAAAAA4QklNBB4NVVJMIG92ZXJyaWRlcwAAAAQAAAAAOEJJTQQaBlNsaWNlcwAAAAB3AAAABgAAAAAAAAAAAAAAZAAAAMgAAAALAHAAbAB1AHQAbwBiAHUAbQBwADIAawAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAyAAAAGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOEJJTQQUF0xheWVyIElEIEdlbmVyYXRvciBCYXNlAAAABAAAAAM4QklNBCEaVmVyc2lvbiBjb21wYXRpYmlsaXR5IGluZm8AAAAAVQAAAAEBAAAADwBBAGQAbwBiAGUAIABQAGgAbwB0AG8AcwBoAG8AcAAAABMAQQBkAG8AYgBlACAAUABoAG8AdABvAHMAaABvAHAAIAA2AC4AMAAAAAEAOEJJTQQGDEpQRUcgUXVhbGl0eQAAAAAHAAMAAQABAQD/4gO4SUNDX1BST0ZJTEUAAQEAAAOoQURCRQIQAABwcnRyR1JBWVhZWiAHzwAGAAMAAAAAAABhY3NwTVNGVAAAAABub25lAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLUFEQkUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVjcHJ0AAAAwAAAAExkZXNjAAABDAAAAGd3dHB0AAABdAAAABRia3B0AAABiAAAABRrVFJDAAABnAAAAgx0ZXh0AAAAAENvcHlyaWdodCAoYykgMTk5OSBBZG9iZSBTeXN0ZW1zIEluY29ycG9yYXRlZC4gQWxsIFJpZ2h0cyBSZXNlcnZlZC4AZGVzYwAAAAAAAAANRG90IEdhaW4gMjAlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLVhZWiAAAAAAAAAAAAAAAAAAAAAAY3VydgAAAAAAAAEAAAAAEAAgADAAQABQAGEAfwCgAMUA7AEXAUQBdQGoAd4CFgJSApAC0AMTA1kDoQPsBDkEiATaBS4FhQXeBjkGlgb2B1cHuwgiCIoI9AlhCdAKQQq0CykLoAwaDJUNEg2SDhMOlg8cD6MQLBC4EUUR1BJlEvgTjRQkFL0VVxX0FpIXMhfUGHgZHhnGGm8bGxvIHHYdJx3aHo4fRB/8ILUhcSIuIu0jrSRwJTQl+SbBJ4ooVSkiKfAqwCuSLGUtOi4RLuovxDCgMX0yXDM9NB81AzXpNtA3uTikOZA6fjttPF49UT5FPztAM0EsQiZDIkQgRR9GIEcjSCdJLUo0SzxMR01TTmBPb1B/UZFSpVO6VNFV6VcCWB5ZOlpYW3hcmV28XuBgBmEtYlZjgGSsZdlnCGg4aWlqnWvRbQduP294cLJx7nMrdGp1qnbseC95dHq6fAF9Sn6Vf+GBLoJ8g82FHoZxh8WJG4pyi8uNJY6Bj92RPJKbk/2VX5bDmCiZj5r3nGCdy583oKWiFKOFpPamaafeqVSqy6xErb6vObC2sjSztLU0tre4Orm/u0W8zb5Wv+DBbML5xIfGF8eoyTvKzsxjzfrPktEr0sXUYdX+15zZPNrd3H/eI9/I4W7jFuS/5mnoFOnB62/tH+7Q8ILyNfPq9aD3V/kQ+sr8hf5B////7gAOQWRvYmUAZAAAAAAA/9sAQwAKBwcHCAcKCAgKDwoICg8SDQoKDRIUEBASEBAUEQwMDAwMDBEMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AACwgAZADIAQERAP/dAAQAGf/EAFEAAAMBAQEBAAAAAAAAAAAAAAECAwAEBwUQAAEDBAEDAgMFBgUFAAAAAAEAEQIhMRIDQVFhIhMEcYGRocEyQhTwseFSYgXR8aIjFXKCslOj/9oACAEBAAA/APGVllllmTMOE+ETUAN8Up1zEcsTiPzJFkXPb6LZHt9Atk9x9Fsn4H0TeDVB+SQs9FlkQHICbZqMACSK8cpFlll//9Dx0w6We6B19kDAhaMCS1kpDFiiE4HyVdeszLBrNX7l0btO6GmcCxzZhBsXv+V/JfPlGUZGMg0hcFBZZEgmqCbsLd0CC9UYtytX9gjFwG4N13S9nu2ey9eW6JhD8Oky8x/2r5zIgDlGUQDQuE3pivQL/9HySDyYSI6B1iAXLP3S+neVG6IAR5LMk2iLvF24dIA6rAU7J5TFBAeXMuirq2zhMS1vGgjQirdip+5PuPdbZ7tjzmaGRYWpFc2EhcMswRECUcGBe/REaxEgmo56JtgidhaLDgBTnHGTN0KaMWLmhPZVaIJjY9EDAAZRAkOosqR2x165gANKLEVPl+ULjCKfWMpiIo/708dcpEBiJEfFyv/S8eeta9gtkUwmwB6ulPaqEyacpVfVTEyjkJWHX5ro1+1BJOytBbh7v/0q0dWqIB1xMi+LyuefEKY1ie0zsRLygRRR9wXkBGmoHxXLM1Ie3ARjPgUb7U4mHJlUiwCEtoJsMegVIASOL356LSBAxkaigNPtQMsQGDsalTlKMy9iboHYcRGwFkHcML3SkF1gWRFTdmT5VcEjpwv/0/IIiWJYuCPJjx0SEFZySSbpn4CGzGnXlTVoTIsa8dvgqeuYwMSxuGIcoz3CYAHiKOQ4r81aWwmRaQEaDIBqANSKnt1lmrhEc9FxyFVg3JYclEy8RFh2PK0DEF5AkfyhU1bTrlEgA9jX9y22R2HIyvXG4dTOTdktRVGtnYFaru9R1QRLAtcdUEQ6/9TxsOCPuTAjqiDYFGI8jcJ9uvwiAXJDgXI/zUgA9bcpXFViXvfqngQCKP2NVWfuCdeAADF8uUwkSYbneuJieCz5KE4SJdix5KS0vgiaVPPCxlLER/K7/cgBWq2VW44WJ/ejKIjy4NkHoyCPDEd3QWt8VnX/1fG6CicwYguA6EZGywJen2ozEolnrcMkJPKVZEFEm4NzdUgcYklvmjsnLZIWH2BTkOOeUKkueEZSB44ZACmXT6uUqIs3VPKBiIuRWrCpQtW4S1sssi38EG6r/9bxw5HnsnDtW6Uh3a6AABcfJUlMzi8r/wAKBLhRzQGyVotR35QEKsad02FTyyxiYmovwqHAAECnJJ/cFPKrxLLXLISDJasmxkHpRIjVkWIuPksHNuU2LBilIAWan7WTA0b/ADQqHdf/1/J56dYiHHnyEw9rnqEgRGQNQWqFzyg0vgyBhZ3APASyiwc346IBr3VIB5AULlm+KtGEfSl/7ARiCOHrVP6cpahCju8jywU/SAIfLG4YcWR2y0iPjreIoJEuXXLMUBDMXstHxY/PstjKYMhbk91eGgiOQLSHP+CpHWBrxepuSubb7fZrYyDPZ0YapM5Hyskli7WREQ/J7AKmyHjQUj1IeqkYkU5CMYEin8FQwxLiwsftTatEtgBDVt1+i//Q8jm8duUQ4N8u/wAF0DdDAnTIAlwNVaN+Zz+Jc7uSWFB+11USfGOxmAYVHxS74a7xAPAAqp4RaouqxEGr8g11osJUEiAOLo6zEzFXJqYt0uq7tsI7BEkxxiSX5BPfFc5EpMQGhI0Jvboht9AtCMSJW7f6lOMC0gz8CoYFWgICR9Sx6Urx4ox2QjPEVhy6qJ67RAJqa1sFE+7iQ0ov3KSO4Akmo6KczGUiQE2nYYSyABBox5XVHbqnH05Yh2GZDAEm5YJDKEsniJTi4MgHcinP5UI+nQScEflXXoj7aUTPZMAi1PI/HLxVAdUdhlGIZ3fkP/4r/9HyMSnj5A1oJcVQLiNGI680ShzIBzVWGppfhyPESWdH3kIa2ERiWyFXNVzwmS/1LKoPZwaldumUo6zj/tzbyOTEhkkNE9ewCYwiax2GLgZc/wAyT+5692j3URu88o5RlIECQJPnEflXF6m0zyyOX81iiJS5P1rdYSL0FvqiImRtXumjHqfEdKsU8omMSTG0enXlchKywKzt8lSG0wfF/IMeFjN5mUaRJfH4pngT/KOWTCWhw4kfIZF7hVlgXwyrYGjBf//S8h85RJiaDh0GJIOL9ArR0Es0DIckfcrR9GAI2RmMSMXNh9PxLk91shs3EwJOsUD3UwQAGunjMOxoDQvwuqOzUR5SAoAwf/BfT9r7qU4R9Sezbqh+HWTSLD+vspf37d/a9vtdPozP63XI5jEgGJ/qMj+FfCyRzFEw21rb6px7hie/Sg+xY73g+Xmb0BUzumQ2RsxU1R5SgI3AskIKACNkQnjMD8VU/gSCH/eVSZMKSEjzlJ1//9PyKuX9XL/emGblm+z7106v+QxPovj2Rn/znpwy9X0/yWZlx+9/VeqP1eXqMGdrdsaLnp3R8e6McnGLvwyY+rV8+6nTuhRHx7oePdlvHutRHx7rePdPF8Ti+PKYYNX5vddMf0WQzbKl82/0oz/Q5/7WGXDZt/8ARSl6eUs2fm32Mpy9Lj7HQg2Q9N8uzv8AYrx/VN4erh82+S//2Q=="),i=new a(new c(25,32,32),new l({map:o,normalMap:n}));return i.position.set(-10,-125,-60),A.add(i),i}(Q),u=function(A){const o=(new e).load("/decades_of_change/assets/earth.5e423652.jpg"),n=(new e).load("/decades_of_change/assets/earthbump.a46f51cb.jpg"),i=new a(new c(35,32,32),new l({map:o,normalMap:n}));return i.position.set(180,35,-80),A.add(i),i}(Q);!function(){for(let A=0;A<500;A++)r(Q)}();const G=[{b:-5e3,s:-5300},{b:-12e3,s:-13e3},{b:-2e4,s:-25e3},{b:-28e3,s:-3e4}],I=-.015*(G[1].b-G[0].s),b=.02*(G[2].b-G[1].s),R=-.005*(G[2].b-G[1].s);function U(){const A=document.body.getBoundingClientRect().top;A>G[0].b?(g.position.x=0,g.position.y=0,g.position.z=-.01*A):A>G[0].s?(g.position.x=0,g.position.y=0,g.position.z=-.01*G[0].b):A>G[1].b?(g.position.x=-.015*(A-G[0].s),g.position.y=0,g.position.z=-.01*G[0].b):A>G[1].s?(g.position.x=I,g.position.y=0,g.position.z=-.01*G[0].b):A>G[2].b?(g.position.x=I,g.position.y=.02*(A-G[1].s),g.position.z=-.005*(A-G[1].s)+-.01*G[0].b):A>G[2].s?(g.position.x=I,g.position.y=b,g.position.z=R+-.01*G[0].b):A>G[3].b&&(g.position.x=I+.015*(A-G[2].s),g.position.y=b,g.position.z=R+-.01*G[0].b)}function M(){window.scrollTo(0,0),g.position.z=0,g.position.y=0,g.position.x=0,U()}window.onscroll=U,U(),window.resetScrollPos=M,M(),window.toggleAuto=function(){let A=document.querySelector("#auto");x=A.checked};let x=!1;!function A(){requestAnimationFrame(A),S&&(x&&window.scrollBy(0,20),p.rotation.x+=.005,p.rotation.y+=.0075,p.rotation.z+=.005,u.rotation.x+=.007,u.rotation.y+=.005,u.rotation.z+=.008,h.render(Q,g))}();
