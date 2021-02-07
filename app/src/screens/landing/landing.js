import React, {Component} from "react";
import {Link} from 'react-router-dom';
import { Label, Select } from '@rebass/forms';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import AudioPlayer from 'react-playlist-player'
import './landing.css';



//import assets
import Retro from '../../assets/retro.jpg';
import Medieval from '../../assets/medieval.jpg';
import Victorian from '../../assets/victorian.jpg';
import Modern from '../../assets/modern.jpg';
import { Heading } from "rebass";

//import music
import Alejandro from '../../music/retro/1.mp3';





class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bg:Modern,
      style:'retro',
    };
  } 
  _setBackground(style){
    console.log(style.value)
    if(style.value=='Victorian'){
      this.setState({bg:Victorian});
      this.loadVictorian();
    }
    else if(style.value=='Medieval'){
      this.setState({bg:Medieval});
      this.loadMedieval();
    }
    else if(style.value=='80\'s'){
      this.setState({bg:Retro});
      this.loadRetro();
    }
  }
  

  handleVSubmit(){
    this.setState({vid:true});
  }
  loadRetro = () =>
    this.setState({
      currentPlayList: {
        playlistName: 'Retro',
        bandName: 'TeamZero',
        songs: [
          {
            position: '1',
            songName: 'Retro Playlist',
            songUrl: 'https://raw.githubusercontent.com/ebtesam25/playlist/main/1.mp3?token=AGHHPHICV4DMMHVQOVXE5NDAFB2IK'
          }
        ],
        type: 'album'
      }
    })
    loadMedieval = () =>
    this.setState({
      currentPlayList: {
        playlistName: 'Medieval',
        bandName: 'TeamZero',
        songs: [
          {
            position: '1',
            songName: 'Medieval Playlist',
            songUrl: 'https://raw.githubusercontent.com/ebtesam25/playlist/main/1.mp3?token=AGHHPHICV4DMMHVQOVXE5NDAFB2IK'
          },
         
        ],
        type: 'album'
      }
    })
    loadVictorian = () =>
    this.setState({
      currentPlayList: {
        playlistName: 'Victorian',
        bandName: 'TeamZero',
        songs: [
          {
            position: '1',
            songName: 'Victorian Playlist',
            songUrl: 'https://raw.githubusercontent.com/ebtesam25/playlist/main/1.mp3?token=AGHHPHICV4DMMHVQOVXE5NDAFB2IK'
          },
         
        ],
        type: 'album'
      }
    })
  
    render() {
      const styles = [
         'Victorian',
         'Medieval',
          '80\'s',
      ];

        return (
          <body style={{backgroundImage:`url(${this.state.bg})`, height:950, position:'absolute', top:0, left:0, width:1900, backgroundSize:'100%'}}>
         <div>
            <div style={{alignContent:'left', width: '100%', display:'inline-block', textAlign:'left', alignSelf:'left', position:'absolute', left:0, top:0}}>
            
            
            </div >
            <div style={{marginTop:'10%'}}>
            
                <div style={{fontFamily:"Montserrat", lineHeight:"100%", fontSize:"3vh", marginTop: "5%", marginLeft:'-5%', color:'#FFF'}}>
                  Travel back in time...
                </div>
                <div style={{ marginLeft:"30%", alignSelf:'center', alignContent:'center', textAlign:'center', alignItems:'center', width:700}}>
                <Label htmlFor='style' style={{fontFamily:'Montserrat', fontSize:20, color:'#FFF', marginTop:'15%'}}>Take me back to</Label>
                <Dropdown options={styles} className="decor" onChange={(e)=>{this.setState({style:e}); console.log(e); this._setBackground(e)}}  placeholder="Select an era"  />;
                   
                </div>
                             
            </div>
            <div className={'Demo'} style={{fontFamily:'Montserrat', fontSize:20}}>
        <AudioPlayer  currentPlayList={this.state.currentPlayList} onToggle={({audioPlaying}) => console.log({audioPlaying})}/>
      </div>
         </div>  
         </body> 
        );
    }
}

export default Landing;