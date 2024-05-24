class Music{
    constructor(title,singer,img,file){
        this.title =title;
        this.singer=singer;
        this.img = img;
        this.file =file;
    }

    getName(){
        return this.title +" - " + this.singer;

    }

}

const musicList = [
    new Music("Cocukluk Aşkımsın","Galatasaray","1.jpg","1.mp3"),
    new Music("Şereftir Seni Sevmek","Galatasaray","2.jpg","2.mp3"),
    new Music("4 Sene ÜsT Üste Şampiyon Olduk","Galatasaray","3.jpg","3.mp3")
];