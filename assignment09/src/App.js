import logo from './logo.svg';
import './App.css';
import Ex1StateHookSlide from "./00-slides/01-state-hook.component";
import Ex2EffectHook from "./00-slides/02-effect-hook.component";
import Ex2EffectHookNoClean from "./00-slides/02-effect-lifecycle-no-clean-up.component";
import Ex2EffectHookClean from "./00-slides/02-effect-lifecycle-clean-up.component";

function App() {
    return (
        <div className="App">
            <Ex1StateHookSlide/>
            <Ex2EffectHook/>
            <Ex2EffectHookNoClean/>
            <Ex2EffectHookClean/>
        </div>
    );
}

export default App;
