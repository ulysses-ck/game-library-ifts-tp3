export default async function AddPage() {
  const platforms = [
    '2600', '3DS',  'DC',   'DS',
    'GB',   'GBA',  'GC',   'GEN',
    'N64',  'NES',  'PC',   'PS',
    'PS2',  'PS3',  'PS4',  'PSP',
    'PSV',  'SAT',  'SNES', 'Wii',
    'WiiU', 'X360', 'XB',   'XOne'
  ]
  const years = [
    '1980', '1981', '1982', '1983',
    '1984', '1985', '1986', '1987',
    '1988', '1989', '1990', '1991',
    '1992', '1993', '1994', '1995',
    '1996', '1997', '1998', '1999',
    '2000', '2001', '2002', '2003',
    '2004', '2005', '2006', '2007',
    '2008', '2009', '2010', '2011',
    '2012', '2013', '2014', '2015',
    '2016', 'N/A'
  ]
  const genres = [
    'Action',   'Adventure',
    'Fighting', 'Misc',
    'Platform', 'Puzzle',
    'Racing',   'Role-Playing',
    'Shooter',  'Simulation',
    'Sports',   'Strategy'
  ]
  const publishers = [
    '505 Games',
    '989 Studios',
    'ASCII Entertainment',
    'Acclaim Entertainment',
    'Activision',
    'Arena Entertainment',
    'Atari',
    'Bethesda Softworks',
    'Capcom',
    'Codemasters',
    'Deep Silver',
    'Disney Interactive Studios',
    'Eidos Interactive',
    'Electronic Arts',
    'Enix Corporation',
    'Fox Interactive',
    'GT Interactive',
    'Hasbro Interactive',
    'Imagic',
    'Infogrames',
    'JVC',
    'Konami Digital Entertainment',
    'Level 5',
    'LucasArts',
    'MTV Games',
    'Majesco Entertainment',
    'Maxis',
    'Microsoft Game Studios',
    'Midway Games',
    'Mindscape',
    'N/A',
    'NCSoft',
    'Namco Bandai Games',
    'Nintendo',
    'Palcom',
    'Parker Bros.',
    'Red Orb',
    'RedOctane',
    'Sega',
    'Sony Computer Entertainment',
    'Sony Computer Entertainment Europe',
    'Square',
    'Square Enix',
    'SquareSoft',
    'THQ',
    'Take-Two Interactive',
    'Tecmo Koei',
    'UEP Systems',
    'Ubisoft',
    'Universal Interactive',
    'Unknown',
    'Valve Software',
    'Virgin Interactive',
    'Vivendi Games',
    'Warner Bros. Interactive Entertainment'
  ]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-200 to-blue-200 p-4">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Agregar juego</h1>
        <form>
          <label className="block mb-2 text-gray-700" htmlFor="nombre">Nombre del juego</label>
          <input className="w-full p-2 mb-4 border border-gray-300 rounded" type="text" id="nombre" name="nombre" placeholder="Ingrese nombre del juego" />

          <label className="block mb-2 text-gray-700" htmlFor="plataforma">Plataforma</label>
          <select className="w-full p-2 mb-4 border border-gray-300 rounded" id="plataforma" name="plataforma">
            {platforms.map(platform => (
              <option key={platform} value={platform}>{platform}</option>
            ))}
          </select>

          <label className="block mb-2 text-gray-700" htmlFor="año">Año</label>
          <select className="w-full p-2 mb-4 border border-gray-300 rounded" id="año" name="año">
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>

          <label className="block mb-2 text-gray-700" htmlFor="genero">Género</label>
          <select className="w-full p-2 mb-4 border border-gray-300 rounded" id="genero" name="genero">
            {genres.map(genre => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>

          <label className="block mb-2 text-gray-700" htmlFor="desarrollador">Desarrollador</label>
          <select className="w-full p-2 mb-4 border border-gray-300 rounded" id="desarrollador" name="desarrollador">
            {publishers.map(publisher => (
              <option key={publisher} value={publisher}>{publisher}</option>
            ))}
          </select>

          <label className="block mb-2 text-gray-700" htmlFor="ventas">Ventas en Norteamérica</label>
          <input className="w-full p-2 mb-4 border border-gray-300 rounded" type="number" id="ventas" name="ventas" placeholder="Ingrese el total de ventas" />

          <label className="block mb-2 text-gray-700" htmlFor="ventas">Ventas en Europa</label>
          <input className="w-full p-2 mb-4 border border-gray-300 rounded" type="number" id="ventas" name="ventas" placeholder="Ingrese el total de ventas" />

          <label className="block mb-2 text-gray-700" htmlFor="ventas">Ventas en Japón</label>
          <input className="w-full p-2 mb-4 border border-gray-300 rounded" type="number" id="ventas" name="ventas" placeholder="Ingrese el total de ventas" />

          <label className="block mb-2 text-gray-700" htmlFor="ventas">Otras ventas</label>
          <input className="w-full p-2 mb-4 border border-gray-300 rounded" type="number" id="ventas" name="ventas" placeholder="Ingrese el total de ventas" />

          <button className="w-full p-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50" type="submit">Agregar juego</button>
        </form>
      </div>
    </div>
  );
}
