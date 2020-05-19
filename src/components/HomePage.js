import React from 'react'
import fishermanStore from '../stores/FishermanStore'
class FishermenPage extends React.Component{


    constructor(props, context) {
        super(props, context);
        this.onChangeOfFishermen = this.onChangeOfFishermen.bind(this);
    }

    onChangeOfFishermen(){
    }

    componentDidMount() {
        fishermanStore.addChangeListener(this.onChangeOfFishermen);

    }

    componentWillUnmount() {
        fishermanStore.removeChangeListener(this.onChangeOfFishermen);
    }

    render() {
        return (
            <div className="container p-2">
                <div className="row p-1">
                    <div className="col-4">About the International Fishing Association</div>
                    <div className="col-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultrices ornare sagittis. Curabitur quam tellus, sollicitudin in ultrices et, consectetur in justo. Phasellus ultrices sit amet leo ut ultrices. Integer a pharetra ipsum. Sed sit amet ullamcorper dui. Fusce est augue, euismod id nunc et, rutrum vulputate urna. Vestibulum vitae ultrices est, quis ultrices nisi.</div>
                </div>
                <div className="row p-1" >
                    <div className="col-4">How the journal should be used</div>
                    <div className="col-8">Pellentesque dapibus a risus in interdum. Pellentesque hendrerit quam ac nibh ullamcorper, a interdum lorem semper. Proin faucibus cursus magna aliquam tincidunt. Fusce imperdiet porta felis. Fusce efficitur iaculis mauris, in pharetra ligula tempor at. Phasellus ante libero, pharetra vel velit at, vulputate pulvinar leo. Phasellus posuere ante egestas ipsum convallis finibus. Nullam eu viverra ex.

                        Suspendisse potenti. Nam eget ornare ex, imperdiet porta diam. Donec feugiat sollicitudin neque suscipit vestibulum. Cras vulputate turpis auctor ultricies vestibulum. Aenean eu cursus odio. Integer facilisis ut dolor sit amet suscipit. Duis mollis, quam vel pretium vestibulum, tortor tortor tristique augue, eu tempus risus dui et justo. Morbi et pretium lacus. Aliquam nec risus a ex tempus pretium pretium id dui. Aliquam erat volutpat.</div>
                </div>
                <div className="row p-1" >
                    <div className="col-4">The reasons why i don't want to work with react again</div>
                    <div className="col-8">Fusce sed nulla nunc. Donec ex ipsum, suscipit pharetra lobortis sit amet, interdum vel nunc. Pellentesque diam enim, molestie vitae faucibus quis, mollis eu sem. Mauris interdum ornare laoreet. Nullam sollicitudin suscipit mollis. Nam sodales risus nec risus egestas tempus. Suspendisse egestas purus libero, nec finibus magna eleifend id. Etiam eget orci eu mi imperdiet egestas. Proin iaculis velit in sagittis suscipit. In eu sapien et erat euismod suscipit ac fringilla arcu. Donec eu tempus risus. Nulla facilisi.

                        Proin in pulvinar mi. Aenean in tempus leo. Donec molestie interdum ligula, sit amet tristique tortor consequat non. Nulla tincidunt orci sed odio fringilla, id aliquet mi pharetra. Nunc placerat ex vitae venenatis maximus. Vestibulum sit amet tristique mauris. Vivamus tristique dictum enim, quis suscipit arcu volutpat sed. Quisque vitae sollicitudin erat. Vestibulum non lacus eget lectus elementum vulputate non in ante. Mauris dignissim nunc ut metus faucibus commodo.

                        Cras ac sollicitudin orci. Nullam rutrum, tellus sit amet sodales cursus, neque nulla semper velit, ut ultrices ex dui sed ligula. Ut semper nisi fermentum maximus eleifend. Nullam facilisis ante quis mauris pretium, nec lobortis lacus posuere. Donec consectetur magna et euismod blandit. Quisque semper velit luctus venenatis lacinia. Cras eu tempor ex. Sed congue viverra massa nec rutrum. Donec non lacinia purus. Integer ut risus eget felis lacinia luctus vel nec sapien. Sed rutrum accumsan facilisis. Donec ante lacus, varius vel lorem ac, consectetur bibendum dui. Ut consequat nisl eu felis suscipit, suscipit dapibus nulla semper.

                        Maecenas pretium rhoncus lacus, a semper est eleifend eget. Phasellus tempus tincidunt auctor. Ut enim lectus, varius ac purus et, fringilla rhoncus nulla. Cras dolor dolor, venenatis quis nunc eu, blandit finibus eros. Ut vulputate, nisi eu elementum fringilla, est massa finibus nunc, id euismod nunc enim eget leo. In ornare egestas nibh. Aenean vel turpis eleifend, iaculis magna nec, varius nisi. Duis eget quam id turpis dignissim mattis id sed risus. Aenean et ullamcorper augue. Aenean id sapien mollis mauris iaculis lobortis commodo a ipsum. Ut auctor ullamcorper risus, vel aliquam diam malesuada sit amet.

                        Curabitur auctor ipsum augue, eget feugiat metus ullamcorper sit amet. Nullam condimentum consequat risus id maximus. Ut id semper lectus. Aliquam erat volutpat. Vestibulum consectetur, tellus id convallis faucibus, lorem sapien consequat arcu, et congue augue dolor vel odio. Maecenas pharetra mauris ac aliquet tristique. Ut augue orci, eleifend non convallis vel, sagittis vel elit. Morbi lobortis blandit quam pellentesque euismod. Vestibulum a accumsan est. Nunc semper dignissim elit at mattis. Aenean vulputate lectus ac turpis sollicitudin tempor.

                        Vestibulum diam quam, ultrices ut risus eget, pretium laoreet nisl. Donec porta, tellus et malesuada pharetra, magna nunc lobortis nisi, non semper sapien justo vel augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sit amet commodo eros. Nunc vitae erat nec ligula ornare tempus. Donec ornare ligula eget finibus ornare. Ut facilisis quam eros, vel pretium erat pulvinar sit amet. Donec id arcu placerat odio dignissim elementum.

                        Pellentesque euismod vulputate nunc non fringilla. Nulla placerat sit amet diam ut laoreet. Proin vitae lacus risus. Integer sit amet mattis quam, ac venenatis enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque faucibus finibus eleifend. Sed condimentum, neque sit amet dignissim rutrum, tellus metus blandit mi, in posuere nulla enim quis sapien. Aliquam eleifend maximus mauris. Nam laoreet odio eros, in tristique leo consequat sed. Sed ex erat, dignissim id congue nec, dapibus eget nisi. Morbi non risus tincidunt, fringilla tellus nec, egestas dolor. Donec lacinia mattis lorem. Praesent vitae dignissim nunc.

                        Suspendisse pellentesque sem vel felis faucibus, nec tincidunt lacus tincidunt. In viverra hendrerit felis, sed euismod libero sodales mollis. Pellentesque euismod facilisis leo, sed mattis justo scelerisque imperdiet. In sit amet ipsum vitae massa rutrum eleifend sed ac tortor. Nulla enim ipsum, ullamcorper ac elit a, eleifend finibus sapien. Nunc ultricies mi sem, eu fermentum nunc vehicula in. Pellentesque et velit ultricies, ultrices dui quis, convallis nunc. Fusce risus lacus, sodales rutrum erat a, placerat laoreet felis. Nam mollis ultricies velit, viverra egestas elit ullamcorper vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut egestas fringilla pretium. Duis bibendum purus nulla. Nunc sit amet fringilla turpis. Proin ut est quis arcu ullamcorper molestie. In vel ligula dui.

                        Vestibulum sagittis metus non rutrum sollicitudin. Cras nisl elit, iaculis et metus et, tincidunt commodo lorem. Aenean rhoncus nunc mollis orci varius tempus. Fusce pharetra nunc massa, vel interdum mauris tempus in. Nam sit amet sapien quis felis tincidunt fermentum efficitur eu lacus. Fusce nibh eros, molestie vitae nisl quis, tristique facilisis ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam sed iaculis est, vitae suscipit dolor. Nunc sem felis, vehicula et vulputate sed, interdum eget ligula. Curabitur a orci vel lacus faucibus volutpat. Proin laoreet, ante quis eleifend porta, urna velit egestas ante, non laoreet odio justo a arcu.

                        Duis lacinia magna semper ullamcorper malesuada. Etiam ac dui mi. Donec porttitor pretium mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec rhoncus lectus. Vivamus est lectus, laoreet vel sapien et, ornare rhoncus felis. Nam ipsum nibh, consectetur sit amet purus vel, molestie malesuada nibh.

                        Vivamus elit urna, mattis ac suscipit id, fringilla vitae erat. Nam maximus dolor quis diam facilisis finibus. In eu semper massa, vel hendrerit quam. Curabitur nec metus odio. Donec odio purus, commodo eu sagittis quis, auctor et felis. Pellentesque laoreet gravida risus, interdum sollicitudin nibh pellentesque vitae. Etiam quis enim sit amet mauris hendrerit iaculis eu vel leo. Sed dictum nulla diam, non tristique justo interdum eget. Maecenas enim enim, mollis quis fermentum quis, aliquam nec diam. Mauris laoreet nisi vitae eros pellentesque, non egestas nunc porta. Cras tristique odio a mattis molestie. Aliquam et mollis augue.

                        Nam id dignissim velit. Aenean finibus nisl ut magna dictum, a euismod risus rhoncus. Curabitur sed posuere massa. Nullam finibus libero sit amet sem porttitor, vitae convallis ex vulputate. Integer id lacus finibus justo semper viverra. Duis condimentum nibh non purus posuere, ac sodales risus eleifend. Proin metus lorem, sagittis vel tristique a, dapibus ut mi. Suspendisse mollis, arcu vel efficitur finibus, erat tortor rutrum tellus, et imperdiet est diam in libero. Etiam dolor urna, placerat sed enim nec, tempus luctus diam. Nulla facilisi. Praesent efficitur semper erat at pellentesque. Sed rhoncus ipsum elit, id blandit magna ornare et.

                        Curabitur semper vitae dolor sit amet sagittis. Nulla efficitur egestas mattis. Cras aliquet vitae ligula eu dictum. Donec nisi erat, convallis at auctor rutrum, malesuada ac tellus. Donec id maximus nisl, dapibus vehicula risus. Aliquam mi urna, tempus et leo vitae, posuere fermentum lectus. Pellentesque commodo purus est, a consequat quam cursus dapibus. In eu lorem at sem tempus iaculis vitae id ante. Mauris risus dui, congue ut lorem non, vulputate mollis nisi. Vivamus faucibus est in quam dignissim, non mattis metus ullamcorper. In mattis lectus id leo viverra hendrerit. Mauris viverra, orci in porttitor pulvinar, sapien justo volutpat velit, nec ultricies urna diam quis libero. Phasellus mollis lacus risus, vulputate dapibus eros ultricies ac. Vestibulum euismod diam viverra, cursus mi eu, molestie nisi. Integer id lacinia eros.

                        Suspendisse gravida urna quis ornare efficitur. Aenean varius eros quis ex mattis volutpat. Ut eu commodo dui. Nunc convallis, ligula sit amet volutpat euismod, dolor purus aliquam diam, porta fringilla odio tortor non lectus. Praesent feugiat, velit a cursus tincidunt, lorem urna finibus justo, ac semper libero libero in nunc. Praesent sit amet turpis eget mauris maximus convallis. Phasellus fringilla vulputate tortor ut hendrerit. In bibendum nec risus nec pulvinar. Praesent et porta magna. Morbi sit amet laoreet leo.

                        Fusce sed suscipit lectus. Maecenas dolor nunc, gravida in dictum quis, dignissim at augue. Nam consectetur nec quam quis porttitor. Vestibulum pretium tellus at mi elementum, hendrerit posuere nunc fermentum. Sed a aliquam ante. Donec fermentum ac arcu id commodo. Aliquam quis lectus venenatis, condimentum mi nec, sodales ipsum. Ut luctus auctor mi. Donec placerat iaculis nunc, viverra fermentum justo vulputate a.

                        Donec quis aliquet arcu. Donec scelerisque quam nec felis gravida, at malesuada eros euismod. Ut vehicula viverra nunc, quis semper est dignissim at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec varius lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin rutrum massa eget tellus fringilla, facilisis efficitur sem viverra. Proin elementum arcu leo, id pretium dui tempor non. Phasellus rhoncus maximus nunc, congue aliquet eros aliquam a. Duis consectetur sem justo, in elementum ligula convallis a.

                        Nam tempus pulvinar nisl, eget placerat lacus pellentesque gravida. Morbi sit amet fermentum quam, nec commodo ipsum. Quisque nisl lacus, dignissim eget ligula in, porta elementum lacus. Nullam vitae metus gravida, dapibus mauris at, eleifend mi. Nunc luctus dolor at neque sodales, et luctus quam aliquet. Aliquam quis est risus. Donec libero sem, condimentum eget molestie ut, pretium ut turpis. Nullam pulvinar quam vel magna sollicitudin elementum. Sed commodo, ex sit amet sodales fringilla, metus mi imperdiet lectus, ac varius neque lectus a urna.

                        Fusce vel velit nec odio mollis congue elementum eget mi. Suspendisse placerat ultricies purus, et convallis sem porttitor id. Sed sit amet velit sollicitudin, tincidunt odio vitae, imperdiet eros. Curabitur tempor dictum aliquam. Praesent tempus vestibulum nunc nec pulvinar. Nulla facilisi. Fusce eget quam ultrices mi laoreet iaculis. Praesent sit amet eros pellentesque, maximus enim porttitor, fringilla tellus. Sed vestibulum turpis non ante finibus semper. Mauris ac ultrices lacus, ac viverra ante. Quisque porttitor efficitur magna at sagittis. Sed magna ante, lacinia sit amet facilisis quis, molestie sed risus.

                        Donec eget ipsum aliquam, consectetur enim ut, scelerisque sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur finibus, lorem ut luctus blandit, orci eros lacinia nisi, ut posuere purus nibh ut nulla. Suspendisse convallis nibh dignissim ex fringilla, eu varius leo vehicula. Nulla ac tempus leo. Nunc sit amet dui ipsum. Cras bibendum dolor nec leo scelerisque dictum quis at ipsum. Quisque suscipit tempus mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere eu erat a volutpat. Mauris interdum fermentum diam sit amet viverra. Quisque sollicitudin, justo non vestibulum cursus, dolor est vehicula felis, quis placerat nisl orci nec felis. Integer quis diam eu nulla finibus mollis sed at turpis. Phasellus orci mauris, imperdiet a mauris vel, sodales finibus mauris. Fusce porttitor, ex sit amet convallis tincidunt, augue neque lobortis lorem, at accumsan ante nulla vitae nisi. Sed commodo velit odio.

                        Nam laoreet tellus quis viverra cursus. Ut sed ornare orci. Curabitur eu fermentum neque. Nam a eros eget purus luctus tincidunt congue sed augue. Integer vestibulum arcu vitae imperdiet cursus. Ut ac tortor odio. Pellentesque pulvinar mauris vel massa elementum pulvinar. Donec blandit tellus vitae scelerisque maximus. Aenean maximus fermentum volutpat. Sed a consequat mauris. Ut elementum a odio sit amet sagittis.

                        Sed sit amet erat eleifend, semper urna eget, ultricies arcu. Vivamus turpis mauris, mollis sit amet mattis sed, ultricies ac nibh. Sed scelerisque tristique lacinia. Nullam urna mauris, sollicitudin in tristique et, luctus eget turpis. Donec laoreet dignissim orci, a scelerisque dolor bibendum non. Integer nec tempor diam. Ut ut semper mauris, sit amet vestibulum augue. Duis velit justo, vulputate eget magna ut, ullamcorper blandit felis. Nulla quis tempor sem, eu pharetra lorem. Nam nec feugiat leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer odio turpis, auctor non tortor ac, aliquet pharetra mi.

                        Ut ornare non libero in condimentum. Aliquam erat volutpat. Praesent tempus ut felis id commodo. Maecenas auctor lacinia ex, at molestie ligula bibendum sed. Praesent semper, diam vel porttitor interdum, magna orci fermentum nibh, a vestibulum orci nisi quis lacus. Etiam vel ligula mauris. Quisque sit amet elit quis leo vestibulum sagittis ac a sem.

                        Donec venenatis lectus vitae ante tincidunt, vel fermentum nulla semper. Cras lectus tortor, dignissim et cursus a, vehicula a purus. Vestibulum sed magna maximus erat tristique congue non eget elit. Proin id nisi luctus, consequat nisi et, suscipit ligula. Phasellus sollicitudin massa in eros aliquam, sed scelerisque magna blandit. Fusce finibus velit quis cursus pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent vehicula nisi non sem dapibus, ut fringilla mi consectetur. Integer imperdiet sagittis risus, eu tempor turpis eleifend et. Phasellus eget egestas magna, tincidunt facilisis lorem.

                        Donec sed elit blandit, congue lorem vel, blandit ipsum. Aenean scelerisque tincidunt dolor at ullamcorper. Nam sed ipsum id eros sodales venenatis eu vitae arcu. Nulla dapibus tempor nisl, a vehicula risus pretium in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vitae sem nisl. Fusce eu erat tempus, hendrerit enim eget, auctor enim. Cras a varius purus, sagittis mollis ligula. Nullam iaculis lorem lorem, a vestibulum sem tincidunt et. In imperdiet ipsum eget libero scelerisque, sit amet interdum purus scelerisque. Etiam interdum cursus porta. Sed non nisl sem. Pellentesque nunc arcu, hendrerit sed rhoncus consectetur, faucibus vitae ipsum. Donec nisl lectus, ultrices non dolor placerat, congue facilisis metus. Etiam est est, sagittis sed efficitur id, tempus et neque. Sed vitae vestibulum sem, non finibus magna.

                        Suspendisse potenti. Donec luctus orci sit amet lacus hendrerit, vitae feugiat sapien volutpat. Cras at tincidunt nulla. Maecenas congue malesuada odio at pharetra. Mauris rutrum massa id efficitur vulputate. Integer fermentum, nibh eget rutrum sagittis, tortor nunc pulvinar lectus, a faucibus velit nunc id nulla. Donec id euismod tellus, id luctus sapien. Curabitur blandit nibh nibh, eget dignissim libero ultricies et. Cras convallis massa augue, sed rhoncus ante varius eget.

                        Maecenas molestie ut justo vel lacinia. Aenean non suscipit nibh. Donec at arcu ut tellus fringilla rhoncus. Praesent massa justo, vestibulum vitae hendrerit ac, interdum non purus. Nullam eu sodales nibh, et scelerisque turpis. Quisque ultrices vulputate elit in finibus. Aliquam viverra elementum risus.

                        Vestibulum arcu ante, eleifend quis luctus vitae, iaculis id enim. Vestibulum velit tellus, egestas non nunc in, iaculis maximus enim. Aenean facilisis tellus vitae tristique rhoncus. Curabitur tincidunt, ex eget egestas viverra, metus ligula scelerisque ex, eu fermentum ligula mi a ante. Cras quis posuere purus. Aenean condimentum libero id tellus ultricies, et semper tellus vestibulum. Morbi blandit gravida tincidunt. Maecenas felis quam, consectetur hendrerit consectetur ac, euismod ut tellus. Donec vitae dui purus. Fusce vitae sollicitudin erat. Quisque in nunc vitae tellus ullamcorper interdum id eget enim. Phasellus consequat sodales eros, eu congue arcu ullamcorper at. Aliquam lobortis id mi a elementum.

                        Nunc vulputate scelerisque est vitae sodales. Curabitur odio dui, malesuada et faucibus fringilla, fringilla id ex. Quisque mollis lobortis accumsan. Donec non iaculis dolor, id semper ex. Curabitur vehicula lectus id dictum finibus. Suspendisse turpis nisi, pharetra sodales ex sed, eleifend vestibulum risus. Quisque a imperdiet nunc. Fusce elit tortor, rhoncus id efficitur ac, tempor ut nibh. Nulla facilisi. Etiam ac lacus dignissim, sagittis mi ac, sagittis arcu. Nam vel velit ante. In a tempus lorem, eu euismod metus. Praesent eget dui tincidunt orci pharetra sagittis. Vestibulum scelerisque eros eu lobortis vestibulum. Nullam lectus nulla, fringilla eu porttitor non, interdum vitae justo. Pellentesque interdum ultricies imperdiet.

                        Sed a libero a sapien congue hendrerit. Donec enim neque, ornare eget tristique sit amet, varius eget dolor. Nunc euismod quam sit amet convallis euismod. Morbi venenatis massa ut risus malesuada imperdiet. In tempor faucibus massa, id semper magna facilisis ac. Aliquam sollicitudin rutrum tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula nulla a urna mollis, in congue nibh tristique. Mauris vel neque eu metus sollicitudin euismod in quis dolor. Nam sit amet dolor magna. Nulla sed efficitur quam, at condimentum turpis. Nam in nulla tincidunt massa lacinia pellentesque. Vestibulum fermentum vitae dui eget blandit. Proin non metus turpis. Donec dictum nibh sed iaculis tempor. Nam at ultricies nisl.</div>
                </div>
            </div>
        );
    }
}

export default FishermenPage;