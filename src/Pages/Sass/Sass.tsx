import './Sass.scss';

function Sass() {
  return (
    <div className="sass">
      <h2 className="variables-h2">Zmienne</h2>
      <p className="variables-p">Tekst dalej jest dodany: </p>
      <div className="variables-div-image"></div>

      <h2>Listy</h2>
      <div id="list">Lista: </div>
      <div id="list-lenght">Długość listy: </div>
      <div id="list-first-element">Pierwszy element: </div>
      <div id="list-last-element">Ostatni element: </div>
      <div id="second-list">Lista z różnymi separatorami: </div>
      <div id="second-list-length">Długość listy: </div>
      <div id="second-list-1element">Pierwszy element: </div>
      <div id="second-list-2element">Drugi element: </div>
      <div id="second-list-3element">Trzeci listy: </div>

      <h2>Mixiny</h2>
      <div className="mixin-div">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis doloribus, distinctio officia, accusamus enim
        veritatis deleniti nulla fuga doloremque vero magnam cumque voluptas aspernatur inventore. Culpa animi accusantium
        modi ut?
      </div>

      <h2>Zagnieżdżanie</h2>
      <div className="nesting">
        <header className="nesting-header">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At architecto cupiditate optio veniam esse harum
          pariatur nemo molestias sunt asperiores dolor dolore doloremque, magnam voluptatibus iste beatae! Est, deleniti
          hic?
        </header>
        <section className="nesting-content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.<a href="/" className="nesting-link">Click me!</a> Cum eaque
          exercitationem aliquam repellat, cupiditate
          soluta fuga ducimus fugit voluptas eos pariatur nostrum perspiciatis a temporibus ipsum culpa facilis alias
          voluptates assumenda quas tempore quidem dolore placeat in. Necessitatibus exercitationem magni quisquam.
          Doloremque amet vel ab ipsum quis impedit quas nostrum.
        </section>
        <footer className="nesting-footer">After: </footer>
      </div>

      <h2>Funkcje</h2>
      <div id="function-line1" className="function-line"></div>
      <div id="function-line2" className="function-line"></div>
      <div id="function-line3" className="function-line"></div>
      <div id="function-line4" className="function-line"></div>

      <h2>Instrukcje warunkowe</h2>
      <div className="div-conditional">Div ze stylami warunkowymi</div>

      <h2>Pętle</h2>
      <div id="for1" className="for-div"></div>
      <div id="for2" className="for-div"></div>
      <div id="for3" className="for-div"></div>
      <div id="for4" className="for-div"></div>
      <div id="for5" className="for-div"></div>
      <div id="for6" className="for-div"></div>

      <hr />
      <div id="each1" className="for-div"></div>
      <div id="each2" className="for-div"></div>
      <div id="each3" className="for-div"></div>
      <div id="each4" className="for-div"></div>
      <div id="each5" className="for-div"></div>
      <div id="each6" className="for-div"></div>

      <hr />
      <div id="while1" className="for-div">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, dolorem.</div>
      <div id="while2" className="for-div">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, dolorem.</div>
      <div id="while3" className="for-div">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, dolorem.</div>
      <div id="while4" className="for-div">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, dolorem.</div>
      <div id="while5" className="for-div">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, dolorem.</div>
      <div id="while6" className="for-div">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, dolorem.</div>

      <h2>Operacje na kolorach</h2>
      <div className="color-operation"></div>

      <h2>Operacje matematyczne</h2>
      <div id="div-random">Random: </div>
      <div id="div-percentage">Percentage: </div>
      <div id="div-round">Round: </div>
      <div id="div-ceil">Ceil: </div>
      <div id="div-floor">Floor: </div>
      <div id="div-abs">Absolutna: </div>
      <div id="div-min">Min: </div>
      <div id="div-max">Max: </div>
    </div>
  );
}

export default Sass;