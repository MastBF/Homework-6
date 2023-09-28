class Playlist {
    constructor() {
        this.songs = []
        this.index = 0
        this.isPlaying = false
        this.time = 0
    }
    add(newSong){
        this.songs.push(newSong.title)
    }
    play() {
        if(this.time > 0 ) {
            this.isPlaying = true
            console.log(`${this.songs[this.index]} started`)
        }else if(this.index === 0 && this.time === 0){
            this.isPlaying = true
       console.log(`${this.songs[this.index]} started to play`)
        }else if(this.index != 0 && this.index < this.songs.length){
            console.log(`${this.songs[this.index - 1]} stopped, ${this.songs[this.index]} start to play`)
        }else {
            console.log(`${this.songs[this.index - 1]} stopped, ${this.songs[0]} start to play`)
            this.index = 0
        }
    }
    stop() {
        this.time += 1
     song.stop()
    }
    next() {
        this.index += 1
        this.play()
    }
    
}
class Song {
    constructor(title, singer) {
        this.title = title
        this.singer = singer
    }
    stop() {
        console.log(`${playlist.songs[playlist.index]} stopped`)
    }
}

const song = new Song()
const playlist = new Playlist
const heyJude = new Song("Hey Jude", "The Beatles");
const jaded = new Song("Jaded", "Aerosmith");
playlist.add(heyJude);



playlist.add(jaded);
playlist.play(); // Hey Jude started to play
playlist.next(); // Hey Jude stopped, Jaded started
playlist.next(); // Jaded stopped, Hey Jude started
playlist.stop(); // Hey Jude stopped
playlist.play(); // Hey Jude started
playlist.play(); // Hey Jude started
playlist.play(); // Hey Jude started





