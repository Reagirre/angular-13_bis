export interface Electro {
  CargaDatosLecturasId: number;
  FechaLectura:         Date;
  CodigoEtiqueta:       string;
  GeoPosicion:          string;
  TipoLectura:          TipoLectura;
  Donde:                Donde;
  Region:               Region;
  Provincia:            Provincia;
  Proveedor:            Proveedor;
  TipoRAEE:             TipoRAEE;
  DescripcionResiduo:   string;
  Marca:                string;
  Modelo:               string;
  Peso:                 string;
}

export enum Donde {
  Cac = "CAC",
  Domicilio = "Domicilio",
  PlantaDeTratamiento = "Planta de Tratamiento",
  PuntoDeRecogida = "Punto de Recogida",
}

export enum Proveedor {
  CantabriaRecycling = "Cantabria Recycling",
  Ecorecogidas = "Ecorecogidas",
  RecuRAEE = "RecuRAEE",
  TVRecupera = "TV Recupera",
}

export enum Provincia {
  Bizkaia = "Bizkaia",
  Burgos = "Burgos",
  Cantabria = "Cantabria",
  Gipuzkoa = "Gipuzkoa",
}

export enum Region {
  Cantabria = "Cantabria",
  CastillaYLeón = "Castilla y León",
  PaísVasco = "País Vasco",
}

export enum TipoLectura {
  Entrada = "Entrada",
  Finalización = "Finalización",
  Salida = "Salida",
}

export enum TipoRAEE {
  FR1Frigoríficos = "FR1 - Frigoríficos",
  FR2Monitores = "FR2 - Monitores",
  FR4Electrodomésticos = "FR4 - Electrodomésticos",
  FR6Ordenadores = "FR6 - Ordenadores",
}
