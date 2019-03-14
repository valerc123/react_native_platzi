import React, { Component } from 'react';
import Video from 'react-native-video';
import {StyleSheet, ActivityIndicator, Text} from 'react-native';
import Layout from '../components/layout';
import ControlLayout from '../components/control-layout';
import PlayPause from '../components/play-pause';
import FullScreen from '../components/fullscreen';
import ProgressBar from '../components/progressbar';

class Player extends Component{
    state = {
        loading: true,
        pause: false,
        fullScreen: false,
        progress: 0.0,
        duration: 0.00,
        currentTime: 0.00,
    }
    //ios - loader
    onBuffer = ({ isBuffering }) =>{
        this.setState({
            loading: isBuffering
        })
    }
    //android - loader
    onLoad = () => {
        this.setState({
            loading: false
        })
    }

    //la manera de correcta de cambiar el estado  al contrario en vez de !this.state.pause
    playPause = () => {
        this.setState(function(prevState){ 
            return { pause: !prevState.pause}
        })
    }
    
    fullScreen = () => {
        this.setState(function(prevState){ 
            return { fullScreen: !prevState.fullScreen}
        })
    }
    onFullScreen = () =>{
        this.fullScreen();
        this.state.fullScreen ? this.video.dismissFullscreenPlayer() : this.video.presentFullscreenPlayer();
    }
    videoRef = (element) =>{
        this.video = element;
    }
    onProgress = (payload) => {
       // console.log(payload)
        let currentTime = payload.currentTime / 60;
        let minutes = Math.floor(currentTime);
        let seconds = currentTime % 1;
        seconds = (seconds * 60) / 1000;
        let time = (minutes + seconds * 10).toFixed(2);
        this.setState({
          currentTime: time,
          progress: (payload.currentTime / payload.seekableDuration)
        });
      }

    render(){
        return(
            <Layout
                loading={this.state.loading}
                loader={ <ActivityIndicator color="gray"/>} //indicador mientras carga el video
                video={ 
                    <Video
                        muted
                        source={{uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
                        style={styles.video}
                        resizeMode="contain"
                        onBuffer={this.onBuffer}
                        onLoad={this.onLoad}
                        paused={this.state.pause}
                        ref={this.videoRef}
                        onProgress={this.onProgress}
                    />}
                controls={ 
                    <ControlLayout>
                        <PlayPause onPress={this.playPause} paused={this.state.pause}/>
                        <ProgressBar progress={this.state.progress}/>
                        <Text>time left</Text>
                        <FullScreen fullScreen={this.state.fullScreen} onPress={this.onFullScreen}/>
                    </ControlLayout>
                }
            />
        )
    }
}
const styles = StyleSheet.create({
    video: {// el video será flexible y se acomodará segun el tamaño que tenga el contenedor
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
    }
})
export default Player