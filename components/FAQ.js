import React, {Component} from 'react';
import {AppRegistry, View, Text, Button, StyleSheet, ScrollView, Alert} from 'react-native';
import {name as appName} from '../app.json';
import Colors from '../styling/colors';
import MacroExplanations from './macroExplantions';
// AppRegistry is the JS entry point for all ReactNative apps. 

export default class FAQ extends Component{
    constructor(props) {
        super()
        this.state = {
            // FAQVariable:'it displays by using state.var'
        }
    }
    selectSex = input =>{
        Alert.alert(
            'Alert',
            `You are selecting to change your sex from ${this.props.sex} to ${input}?`,
            [
              {text: 'Yes', onPress: () => {this.props.selectSex(input)}},
              {text: "No"},
            ],
            {cancelable: false},
          );
    }
    sexSelection = () =>{
        if(this.props.sex === "Male"){
            return(
            <View style = {styles.buttons2}>
                <Button color={Colors.button2} title="Female" onPress={()=>this.selectSex('Female')}></Button>
            </View>
            );                
        }
       if(this.props.sex === "Female"){
            return(
                <View style = {styles.buttons}>
                    <Button color={Colors.button} title="Male" onPress={()=>this.selectSex('Male')}></Button>
                </View>
            )
            
        }
    }
    // THis is the area that you put your JS logic for functions and stuff at.
    content = () => {
        if(this.props.questionNumber == 1){
            return(
                <View>
                    <Text style={styles.subtitles}>In Short:</Text>
                    <View style={styles.paragraph}>
                        <Text style={styles.text}>This app is meant to help people change their body composition.</Text>
                        <Text style={styles.emphasis}>This is not the same as losing or gaining weight!</Text>
                    </View>
                    <Text style={styles.subtitles}>Full Story:</Text>
                    <View style={styles.paragraph}>
                        <Text style={styles.text}>Body composition deals with how much of each type of tissue <Text style={styles.italicized}>(groups of cells that make up each part of your body)</Text> and changing the amounts of each type that you have. Your weight, for example, is given by the total sum of the weight of your bones, your organs, your muscles, etc., while your body composition focuses on the weight of group that you have. Given that muscle is heavier than fat, there is no guarantee that you will "lose weight", but you should become leaner if you follow your recommended calorie amounts and exercise.</Text>
                        <Text style={styles.text}>For the sake of this app, we will be focusing helping you to achieve your goal by helping you to gain lean muscle if you chose to gain mass; or to lose fat while maintaining your muscle composition, if you chose to burn fat. For the most part, many people do not understand how to "diet".</Text>
                        <Text style={styles.text}>For example, most people think that the way to lose weight is to eat less, and workout more. This is absolutely true, for quick, short-term results, but usually leads to people hitting a "plateau", or a point when their body refuses to lose anymore weight, and people returning to their old habits, just to regain the weight that they lost.</Text>
                        <Text style={styles.text}>To explain this simply, your body is constantly adapting to your environment, and is meant to survive. If you are giving your body signs that food is not coming often, or in sufficient amounts by "starving" yourself, it will start to use its energy slower. <Text style={styles.emphasis}>This is how your metabolism works.</Text></Text>
                        <Text style={styles.text}>Many people think that the problem with weight management comes from eating too much, which is true; but it usually has to do with us eating foods that are high in sugar/carbohydrates, and not forcing our bodies to use them with exercise.</Text>
                    </View>
                    <Text style={styles.subtitles}>Last Thoughts:</Text>
                    <View style={styles.paragraph}>
                        <Text style={styles.italicized}>This app is <Text style={styles.emphasis}>NOT</Text> suggesting that you that you should <Text style={styles.emphasis}>ONLY</Text> eat salads, and drink water (both of which are still heavily recommended).</Text>
                        <Text style={styles.emphasis}>It is actually saying the exact opposite!</Text>
                        <Text style={styles.text}>This app is suggesting that you to eat whatever you want, but be mindful how much you eat of each item. This app assists you by providing you with personalized daily calorie intake suggestions based on your goal, sex, height and weight, and BMI; all of which play a role in determining how many calories that you should eat. With this, we hope to help you achieve your goals, regardless of what they might be, and to give you an easy way to keep track of how much of each macronutrient you are taking in. Included are ways to save snacks and meals that you eat regularly, and also a way to keep track of other foods that you may come accross infrequently.</Text>
                        <Text style={styles.text}>We hope that this is <Text style={styles.boldItalicizedUnderline}>the</Text> tool to help you to achieve your body goals.</Text>
                    </View>
                </View>
            );
        }
        if(this.props.questionNumber == 2){
            return(
                <MacroExplanations return={this.props.return}></MacroExplanations>
            );
        }
        if(this.props.questionNumber == 3){
            return(
                <View>
                    <Text style={styles.subtitles}>In Short:</Text>
                    <View style={styles.paragraph}>
                        <Text style={styles.text}>The information that you provide allows the app to function as intended.</Text>

                    </View>
                    <Text style={styles.subtitles}>Full Story:</Text>
                    <View style={styles.paragraph}>
                        <Text style={styles.text}>The information is necessary for the app to know how to help you achieve your body goals.</Text>
                        <Text style={styles.text}>Your sex, height and weight, and goals all help the app to provide you with a starting point to get you started.</Text>
                    </View>
                    <Text style={styles.subtitles}>How Does My Sex Affect My Numbers?</Text>
                    <View style={styles.paragraph}>
                        <Text style={styles.text}>Males and females have differences in how they metabolize certain macronutrients, as well as the amounts that they require.</Text>
                        <Text style={styles.text}>For example, males metabolize carbs better than females, while females metabolize fats better. Why? Mainly, it has to do with what our bodies need, and how they use it. Males tend to have more muscle mass than females, which leads to better carb metabolism; whereas females have greater hormonal demands, of which fats are a major ingredient, which leads to greater fat metabolism.</Text>
                        <Text style={styles.text}>This is not to say that this is a 100% true condition, but for the most part, this is a good starting point for understanding why a male and female of same or similar statures would get different amounts for each macronutrient.</Text>
                    </View>
                    <Text style={styles.subtitles}>How Do My Height and Weight Affect My Numbers?</Text>
                    <View style={styles.paragraph}>
                        <Text style={styles.text}>Your height and weight are used to calculate your BMI, which is then used to calculate your lean body mass, which is then used to calculate your calorie suggestions.</Text>
                        <Text style={styles.text}>I would like to let it be known that the current BMI system is a bit antiquated, and could use some updating. However, until a better formula comes, this will be the basis of your caloric recommendations.</Text>
                        <Text style={styles.text}>Your BMI (Body Mass Index), is simply a number that estimates the percentage of your body's fat content. Some drawbacks to this system are that it assumes that everybody with the same height and weight have the same amounts of bone, muscle, and organ mass; which goes without saying, is false.</Text>
                        <Text style={styles.text}>Your lean body mass is your body weight without the fat. This number allows us to calculate how many calories you would need to sustain your body mass, without picking up extra fat.</Text>
                    </View>
                    <Text style={styles.subtitles}>Last Thoughts:</Text>
                    <View style={styles.paragraph}>
                        <Text style={styles.text}>To have your BMI accurately measured, you would want to visit a doctor, nutritionist, or even a gym trainer. They would have the appropriate knowledge and tools to give you an accurate measurement.</Text>
                        <Text style={styles.text}>Because we understand that our formula, being based on a formula with some major margins of error, is imperfect, we have also included the option for you to adjust your numbers, as you make progress. Our algorithm makes suggestions to what your should do, but this is, ultimately, your journey.</Text>
                        <Text style={styles.text}>Also, do not worry too much about the BMI, it's just a number that's needed for estimating how many calories one should eat. After all, Donald Trump and Tim Tebow (<Text style={styles.boldItalicizedUnderline}>supposedly</Text>) would have the same BMI, given that they (again,<Text style={styles.boldItalicizedUnderline}> supposedly</Text>) are the same height and weight.</Text>
                        <Text style={styles.text}>Your BMI may even increase if you were to gain weight, but, remember, this is not about your weight, it is about building lean muscle or burning fat.</Text>
                    </View>
             
                </View>
            );
        }
        if(this.props.questionNumber == 4){
            return(
                <View>
                    <Text style={styles.subtitles}>In Short:</Text>
                    <View style={styles.paragraph}>
                        <Text style={styles.text}>You should expect to get what you're willing to work for.</Text>
                    </View>
                    <Text style={styles.subtitles}>Full Story:</Text>
                    <View style={styles.paragraph}>
                        <Text style={styles.italicized}>"Abs are made 90% in the kitchen, and 10% in the gym."</Text>
                        <Text style={styles.text}>This is a common quote in the bodybuilding world.</Text>
                        <Text style={styles.italicized}>Is it true?</Text>
                        <Text style={styles.text}>It is meant to emphasize the importance of your eating habits. The percentages may be dramatic, but the thought still stands.</Text>
                        <Text style={styles.text}>This app is meant to be used with a regular workout regimen, while keeping your macronutrient counts within the recommended amounts.</Text>
                        <Text style={styles.text}>Therefore, if you thought that this app was a miracle worker that allows you to eat whatever you want, without regard to the amounts, without working out; <Text style={styles.emphasis}>you were wrong!</Text></Text>
                        <Text style={styles.text}>You would be looking for <Text style={styles.italicizedUnderline}>liposuction and other forms of cosmetic surgery</Text>, which come with their own risks.</Text>
                    </View>
                    <Text style={styles.subtitles}>Last Thoughts:</Text>
                    <View style={styles.paragraph}>
                        <Text style={styles.text}>This app is meant to help you by giving you recommended calorie amounts, giving you the ability to save snacks/meals that you eat often, and giving you an easy visual to keep track of your intake. You don't need to do any math, or remember the numbers that you need.</Text>
                        <Text style={styles.emphasis}>Your success is in your hands.</Text>
                    </View>
                </View>
            );
        }
        if(this.props.questionNumber == 5){
            return(
                <View>
                    <Text style={styles.subtitles}>In Short:</Text>
                    <View style={styles.paragraph}>
                        <Text style={styles.text}>No.</Text>
                    </View>
                    <Text style={styles.subtitles}>Full Story:</Text>
                    <View style={styles.paragraph}>
                        <Text style={styles.text}>Your information is yours, and yours alone. This is a fitness app, not social media. We neither want, nor need your data.</Text>

                        <Text style={styles.text}>If this app was collecting data, it would require an internet connection to use, and this app doesn't require any type of online connection. The reason why we charge for this app is to keep ads off of it, and to help you commit to achieving your body goals.</Text>
                        <Text style={styles.text}>If this ever changes, there will be a notification when you update it; but, within the forseeable future, there are no plans to change this.</Text>
                    </View>
                    <Text style={styles.subtitles}>Last Thoughts:</Text>
                    <View style={styles.paragraph}>
                        <Text style={styles.text}>This is our privacy policy, and will be updated if anything ever changes.</Text>
                    </View>
                </View>
            );
        }
        if(this.props.questionNumber == 6){
            return(
                <View>
                    <Text style={styles.subtitles}>In Short:</Text>
                    <View style={styles.paragraph}>
                        <Text style={styles.text}>It is <Text style={styles.emphasis}>strongly</Text> recommended against, <Text style={styles.emphasis}>especially</Text> if your goal was to gain mass.</Text>
                    </View>
                    <Text style={styles.subtitles}>Full Story:</Text>
                    <View style={styles.paragraph}>
                        <Text style={styles.text}>The numbers that you were given were meant to go with a workout regimen. You can change them according to your desires, but exercising and eating right are always best when done together.</Text>
                        <Text style={styles.text}>If you selected to gain mass, you will be setting yourself up to gain fat. Working out, especially weightlifting, cause your muscles to tear, and your body must fix the tears. This cycle of tearing and rebuilding is what causes muscle growth. With adequate amounts of rest, calories (within certain amounts), and exercise, you can build your physique. Lacking any of those things will slow or prevent your progress.</Text>
                    </View>
                    <Text style={styles.subtitles}>Last Thoughts:</Text>
                    <View style={styles.paragraph}>
                        <Text style={styles.text}>If your goal was to burn fat, you <Text style={styles.emphasis}>might</Text> still have some success without working out, but to maximize your results, you should be active. Not working out would be at the expense of your progress.</Text>
                    </View>
                </View>
            );
        }
        if(this.props.questionNumber == 7){
            return(
                <View>
                    <Text style={styles.subtitles}>In Short:</Text>
                    <View style={styles.paragraph}>
                        <Text style={styles.text}>It is commonly-believed that losing weight requires you to cut down food, especially the ones that you enjoy. That's true. However, this app is all about changing body composition, which requires you to boost your metabolism, while reducing your amounts of sugar/carbohydrates intake.</Text>
                    </View>
                    <Text style={styles.subtitles}>Full Story:</Text>
                    <View style={styles.paragraph}>
                        <Text style={styles.text}>People often talk about "fast" matabolisms, and associate them to leaner figures. This is a common misunderstanding of metabolism.</Text>
                        <Text style={styles.text}>Metabolism is your body's calorie burning "habit." Much like any habit, it requires training. If you don't eat much, and put on weight easily, these are indicators that your metabolism is low, and vice versa.</Text>
                        <Text style={styles.text}>The idea behind the calorie amounts that you are provided from this app (if you chose to burn fat) is that you want to train your body to burn calories, without putting on fat. Fat comes from an abundance of unused sugars/carbohydrates that get converted to fat, to be used as backup energy for hard periods where food is scarce (starvation).</Text>
                        <Text style={styles.text}>This is why people initially see a lot of progress when they cut their calories, and workout more; but this is also the cause for when their body stops losing weight. The only thing that you can do at that point to keep losing weight is to keep cutting calories, or to workout more, which would be much harder with such a calorie deficit.</Text>
                        <Text style={styles.text}>This point is where many people usually revert to their old habits, and regain the weight, while their metabolism takes its time to readjust. It is during this readjusment period that people put on weight.</Text>
                    </View>
                    <Text style={styles.subtitles}>Last Thoughts:</Text>
                    <View style={styles.paragraph}>
                        <Text style={styles.text}>It is important to remember the purpose of this app. Eating more foods with higher protein and fat calories, and less carbohydrate calories will allow you to build your metabolism, while preventing your body from getting the "ingredients" needed to make your fat cells grow.</Text>
                    </View>
                </View>
            );
        }
        if(this.props.questionNumber == 8){
            return(
                <View>
                    <Text style={styles.subtitles}>In Short:</Text>
                    <View style={styles.paragraph}>
                        <Text style={styles.text}>With all due respect to how you identify, you should select the sex that your were born as, rather than the gender that you identify with.</Text>
                    </View>
                    <Text style={styles.subtitles}>Full Story:</Text>
                    <View style={styles.paragraph}>
                        <Text style={styles.text}>Male bodies and female bodies have different needs which are established in our DNA. We won't pretend to understand your struggle, but we are as sympathetic as we can be.</Text>
                        <Text style={styles.text}>The choice is ultimately yours, and it is respected. </Text>
                    </View>
                    <Text style={styles.subtitles}>Last Thoughts:</Text>
                    <View style={styles.paragraph}>
                        <Text style={styles.text}>It is our primary belief that people should be free to be themselves, and live as they choose. Along with that, fitness is for everybody, so we don't discriminate, and we have considered this during development.</Text>
                        <Text style={styles.text}>The best thing that we could do for you is acknowledge that this is your choice, and leave it to you to decide:</Text>
                    </View>
                    <View style={styles.horizontalButtonContainer}>
                        <View style={styles.horizontalButtonBox}>
                            {this.sexSelection()}
                        </View>
                    </View>
                </View>
            );
        }
        if(this.props.questionNumber == 9){
            return(
                <View>
                    <Text style={styles.subtitles}>Attribution</Text>
                    <View style={styles.paragraph}>
                        <Text style={styles.text}>Thank you! Aren't they great? I got them from flaticon.com! You can even customize them!</Text>
                        <View style={styles.paragraph}>
                            <Text style={styles.text}>• "Counters" icon was made by <Text style={styles.emphasis}>Srip</Text> from <Text style={styles.italicizedUnderline}>www.flaticon.com</Text></Text>
                            <Text style={styles.text}>• "Save" icon was made by <Text style={styles.emphasis}>Freepik</Text> from <Text style={styles.italicizedUnderline}>www.flaticon.com</Text></Text>
                            <Text style={styles.text}>• "Eat" icon was made by <Text style={styles.emphasis}>Freepik</Text> from <Text style={styles.italicizedUnderline}>www.flaticon.com</Text></Text>
                            <Text style={styles.text}>• "Edit" icon was made by <Text style={styles.emphasis}>Becris</Text> from <Text style={styles.italicizedUnderline}>www.flaticon.com</Text></Text>
                            <Text style={styles.text}>• "FAQs" icon was made by <Text style={styles.emphasis}>Freepik</Text> from <Text style={styles.italicizedUnderline}>www.flaticon.com</Text></Text>
                        </View>
        
                    </View>
                </View>
            );
        }
   
     }


    render(){
        return(
            <View style={styles.content}>
                <View style={styles.buttonBackground}>
                    <Button title="Close"color={Colors.button2} onPress={()=> this.props.return()}></Button>
                </View>
                <ScrollView>
                    {this.content()}
                </ScrollView>  
            </View>
        );
    }
}
const styles = StyleSheet.create({
    buttonBackground:{
        backgroundColor: Colors.buttonBackground2,
        width:'100%',
        alignSelf:'center'
    },
    content:{
        // backgroundColor: Colors.boxBackground,
        backgroundColor: '#d1f7ff',
        flex: 1,
        paddingBottom: 10
    },
    subtitles:{
        fontSize: 25,
        textDecorationLine: 'underline',
        marginBottom: 5,
        marginLeft: 10

    },
    text:{
        fontSize: 20,
        marginVertical: 2,
    },
    paragraph:{
        width: '90%',
        marginBottom: 10,
        alignSelf: 'center'
    },
    emphasis:{
        fontSize: 20,
        marginVertical: 2,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        
    },
    italicized:{
        fontSize: 20,
        marginVertical: 2,
        fontWeight: '300',
        fontStyle: 'italic',
    },
    italicizedUnderline:{
        fontSize: 20,
        marginVertical: 2,
        fontWeight: '300',
        fontStyle: 'italic',
        textDecorationLine: 'underline',
    },
    boldItalicizedUnderline:{
        fontSize: 20,
        marginVertical: 2,
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        fontWeight: 'bold',

    },
    buttons:{
        backgroundColor: Colors.buttonBackground,
        width: "100%",
        alignSelf: 'center',
        marginTop: 10,
    },
    buttons2:{
        backgroundColor: Colors.buttonBackground2,
        width: "100%",
        alignSelf: 'center',
        marginTop: 10,
    },
    horizontalButtonContainer:{
        flexDirection: 'row',
        justifyContent:'space-evenly',
    },
    horizontalButtonBox:{
        width:'30%'
    },
    
})


AppRegistry.registerComponent(appName, () => FAQ);