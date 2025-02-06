import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import PolicyAccordion from "./PolicyAccordion";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          alt="grid"
          className="w-full h-full opacity-50"
          src="/footer-grid.svg"
        />
      </div>

      <div className="flex flex-col items-center relative">
        <h1 className="heading lg:max-w-[45vw]">
          <span className="text-purple">GROOVE IN CLUB</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          ¿Quieres colaborar con nosotros?
        </p>
        <a href="mailto:grooveinclub@gmail.com">
          <MagicButton
            icon={<FaLocationArrow />}
            position="right"
            title="MAIL"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 GROOVE IN CLUB
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              href={info.url}
              key={info.id}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img alt="icons" height={100} src={info.img} width={100} />
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-8 text-white">
        <div className="flex gap-4">
          <div className="w-1/2">
            <PolicyAccordion
              content="Pólitica de privacidad

1. INFORMACIÓN AL USUARIO

¿Quién es el responsible del tratamiento de tus datos personales?

Dual Crew es el RESPONSABLE del tratamiento de los datos personales del USUARIO y le informa de que estos datos serán tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril (GDPR), y la Ley Orgánica 3/2018, de 5 de diciembre (LOPDGDD).

¿Para qué tratamos tus datos personales?

Para mantener una relación comercial con el usuario. Las operaciones previstas para realizar el tratamiento son:

- Remisión de comunicaciones comerciales publicitarias por e-mail, fax, SMS, MMS, redes sociales o cualquier otro medio electrónico o físico, presente o futuro, que posibilite realizar comunicaciones comerciales. Estas comunicaciones serán realizadas por el RESPONSABLE y estarán relacionadas con sus productos y servicios, o de sus colaboradores o proveedores, con los que este haya alcanzado algún acuerdo de promoción. En este caso, los terceros nunca tendrán acceso a los datos personales.
- Realizar estudios de mercado y análisis estadísticos.
- Tramitar encargos, solicitudes, dar respuesta a las consultas o cualquier tipo de petición que sea realizada por el USUARIO a través de cualquiera de las formas de contacto y/o canales de venta que se ponen a su disposición en la página web del RESPONSABLE.
- Remitir el boletín informativo online, sobre novedades, ofertas y promociones en nuestra actividad.

¿Por qué motivo podemos tratar tus datos personales?

Porque el tratamiento está legitimado por el artículo 6 del GDPR de la siguiente forma:

Con el consentimiento del USUARIO: remisión de comunicaciones comerciales y del boletín informativo.
Por interés legítimo del RESPONSABLE: realizar estudios de mercado, análisis estadísticos, etc. y tramitar encargos, solicitudes, etc. a petición del USUARIO.

¿Durante cuánto tiempo guardaremos tus datos personales?

Se conservarán durante no más tiempo del necesario para mantener el fin del tratamiento o existan prescripciones legales que dictaminen su custodia y cuando ya no sea necesario para ello, se suprimirán con medidas de seguridad adecuadas para garantizar la anonimización de los datos o la destrucción total de los mismos.

¿A quién facilitamos tus datos personales?

No está prevista ninguna comunicación de datos personales a terceros salvo, si fuese necesario para el desarrollo y ejecución de las finalidades del tratamiento, a nuestros proveedores de servicios relacionados con comunicaciones, con los cuales el RESPONSABLE tiene suscritos los contratos de confidencialidad y de encargado de tratamiento exigidos por la normativa vigente de privacidad.

¿Cuáles son tus derechos?

Los derechos que asisten al USUARIO son:

- Derecho a retirar el consentimiento en cualquier momento.
- Derecho de acceso, rectificación, portabilidad y supresión de sus datos, y de limitación u oposición a su tratamiento.
- Derecho a presentar una reclamación ante la autoridad de control (www.aepd.es) si considera que el tratamiento no se ajusta a la normativa vigente.

Datos de contacto para ejercer sus derechos:

Dual Crew, Domicilio social: - E-mail: content@premiumguest.com

2. CARÁCTER OBLIGATORIO O FACULTATIVO DE LA INFORMACIÓN FACILITADA POR EL USUARIO

Los USUARIOS, mediante la marcación de las casillas correspondientes y la entrada de datos en los campos, marcados con un asterisco (*) en el formulario de contacto o presentados en formularios de descarga, aceptan expresamente y de forma libre e inequívoca, que sus datos son necesarios para atender su petición, por parte del prestador, siendo voluntaria la inclusión de datos en los campos restantes. El USUARIO garantiza que los datos personales facilitados al RESPONSABLE son veraces y se hace responsible de comunicar cualquier modificación de los mismos.

El RESPONSABLE informa de que todos los datos solicitados a través del sitio web son obligatorios, ya que son necesarios para la prestación de un servicio óptimo al USUARIO. En caso de que no se faciliten todos los datos, no se garantiza que la información y servicios facilitados sean completamente ajustados a sus necesidades.

3. MEDIDAS DE SEGURIDAD

Que de conformidad con lo dispuesto en las normativas vigentes en protección de datos personales, el RESPONSABLE está cumpliendo con todas las disposiciones de las normativas GDPR y LOPDGDD para el tratamiento de los datos personales de su responsabilidad, y manifiestamente con los principios descritos en el artículo 5 del GDPR, por los cuales son tratados de manera lícita, leal y transparente en relación con el interesado y adecuados, pertinentes y limitados a lo necesario en relación con los fines para los que son tratados.

El RESPONSABLE garantiza que ha implementado políticas técnicas y organizativas apropiadas para aplicar las medidas de seguridad que establecen el GDPR y la LOPDGDD con el fin de proteger los derechos y libertades de los USUARIOS y les ha comunicado la información adecuada para que puedan ejercerlos.

Para más información sobre las garantías de privacidad, puedes dirigirte al RESPONSABLE a través de Dual Crew, Domicilio social: - E-mail: content@premiumguest.com"
              title="Política de privacidad"
            />
          </div>
          <div className="w-1/2">
            <PolicyAccordion
              content="INTRODUCCIÓN

Este documento contractual regirá las condiciones Generales de compra de entradas (en adelante, «Condiciones») a través del sitio web https://sales.premiumguest.com/dual-crew, propiedad de Dual Crew bajo la marca comercial de Dual Crew, en adelante, PRESTADOR, cuyos datos de contacto figuran también en el Aviso Legal de esta Web.

Estas Condiciones permanecerán publicadas en el sitio web a disposición del USUARIO para reproducirlas y guardarlas como confirmación del contrato, pudiendo ser modificadas en cualquier momento por Dual Crew. Es responsabilidad del USUARIO leerlas periódicamente, ya que resultarán aplicables aquellas que se encuentren vigentes en el momento de la compra.

Los contratos no estarán sujetos a formalidad alguna con excepción de los supuestos expresamente señalados en los Códigos Civil y de Comercio y en esta o en otras leyes especiales.

La aceptación de este documento conlleva que el USUARIO:

- Ha leído, entiende y comprende lo aquí expuesto.
- Es una persona con capacidad suficiente para realizar la compra.
- Asume todas las obligaciones aquí dispuestas.

Estas condiciones tendrán un período de validez indefinido y serán aplicables a todas las compras realizadas a través del sitio web del PRESTADOR.

El PRESTADOR informa de que el comercio es responsable y conoce la legislación vigente, y se reserva el derecho de modificar unilateralmente las condiciones, sin que ello pueda afectar a los bienes o promociones que fueron adquiridos previamente a la modificación.

IDENTIDAD DE LAS PARTES CONTRATANTES

Por un lado, el PRESTADOR de las entradas compradas por el USUARIO es Dual Crew, con domicilio social en Domicilio social: Portonovo, Sanxenxo, Pontevedra, España, y con teléfono de atención al cliente.

Y de otro, el USUARIO que realiza la compra de las entradas en el sitio web, y es responsable de la veracidad de los datos personales facilitados al PRESTADOR.

OBJETO DEL CONTRATO

El presente contrato tiene por objeto regular la relación contractual de compraventa nacida entre el PRESTADOR y el USUARIO en el momento en que este acepta durante el proceso de compra en línea la casilla correspondiente.

La relación contractual de compraventa conlleva la entrega, a cambio de un precio determinado y públicamente expuesto a través del sitio web, de un producto concreto.

RECTIFICACIONES DE LOS DATOS

Cuando el USUARIO identifique errores en los datos publicados en el sitio web o en los documentos generados por la relación contractual, podrá notificarlo al correo content@premiumguest.com para que Dual Crew los corrija a la mayor brevedad posible.

PROCEDIMIENTO DE COMPRA

El USUARIO, para poder acceder a los productos o servicios que ofrece el PRESTADOR, deberá ser mayor de edad o menor de edad con capacidad suficiente para realizar la compra. Para ello, el USUARIO deberá proporcionar de manera libre y voluntaria los datos personales que se le requerirán, los cuales se tratarán de conformidad con lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril de 2016 (GDPR), relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y la Ley Orgánica 3/2018, de 5 de diciembre (LOPDGDD), relativa a la protección de datos de carácter personal y detallada en el Aviso legal y en la Política de privacidad de este sitio web.

Una vez ha sido seleccionada la o las entradas que desea, se informa de que conforme a lo que exige el artículo 27 de la Ley 34/2002, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), el procedimiento de contratación seguirá los siguientes pasos:

- Cláusulas generales de contratación.
- Entrega y confirmación del pedido realizado.
- Derecho de desistimiento, si aplica.
- Reclamaciones y resolución de litigios en línea.
- Fuerza mayor.
- Competencia.
- Generalidades de la oferta.
- Precio y plazo de validez de la oferta.
- Forma de pago, gastos y descuentos.
- Proceso de compra.
- Disociación y suspensión o rescisión del contrato.
- Garantías y devoluciones.
- Ley aplicable y jurisdicción.

1. CLAUSULAS GENERALES DE CONTRATACIÓN

Salvo estipulación particular por escrito, la realización de un pedido al PRESTADOR supondrá la aceptación por parte del USUARIO de estas condiciones legales. Ninguna estipulación hecha por el USUARIO podrá diferir de las del PRESTADOR si no ha sido expresamente aceptada por adelantado y por escrito por el PRESTADOR.

2. ENVÍO Y ENTREGA DE ENTRADAS

El PRESTADOR no enviará ningún pedido hasta que haya comprobado que se ha realizado el pago.
Las entradas se enviarán al correo electrónico que nos haya facilitado, o podrán ser descargadas desde la misma página de compra, una finalizado el proceso.
El envío o descarga será inmediata una vez se haya confirmado comprobado el pago del pedido.

Falta de ejecución del contrato a distancia

En caso de no poder ejecutar el contrato porque el evento contratado no se lleve a cabo en el plazo previsto, se informará al USUARIO de que quedará legitimado para cancelar el pedido y recibir la devolución del importe total pagado sin ningún coste, y sin que por ello se derive ninguna responsabilidad por daños y perjuicios imputable al PRESTADOR.

En caso de retraso injustificado por parte del PRESTADOR respecto a la devolución del importe total, el USUARIO podrá reclamar que se le pague el doble del importe adeudado, sin perjuicio a su derecho de ser indemnizado por los daños y perjuicios sufridos en lo que excedan de dicha cantidad.

El PRESTADOR no asumirá ninguna responsabilidad cuando la entrega de la entrada adquirida no llegue a realizarse, por ser los datos facilitados por el USUARIO, falsos, inexactos o incompletos.

El USUARIO tendrá derecho a suspender el pago de cualquier parte pendiente del precio del producto adquirido hasta que el PRESTADOR cumpla con las obligaciones establecidas en este contrato.

Corresponde al USUARIO verificar los productos a la recepción y exponer todas las salvedades y reclamaciones que puedan estar justificadas.

En caso de que la contratación no conlleve la entrega física de ningún producto, sino una activación de descarga en un sitio web, el PRESTADOR informará previamente al USUARIO respecto al procedimiento que debe seguir para realizar esta descarga.

3. DERECHO DE DESESTIMIENTO

El USUARIO dispone de un plazo de catorce días naturales, contados a partir de la fecha de recepción del producto o desde la celebración del contrato de compraventa si fuera una prestación de un servicio, para ejercer el derecho de desistimiento, regulado en el artículo 102 del Real Decreto Legislativo 1/2007, de 16 de noviembre, por el que se aprueba el texto refundido de la Ley General para la Defensa de los Consumidores y Usuarios y otras leyes complementarias, en adelante RDL 1/2007. Si el PRESTADOR no cumple con el deber de información y documentación sobre el derecho de desistimiento, el plazo para su ejercicio finalizará doce meses después de la fecha de expiración del período de desistimiento inicial, conforme al artículo 105 del RDL 1/2007.

El derecho de desistimiento no será aplicable a los contratos referidos y enumerados en el artículo 103 del RDL 1/2007, y que se relacionan aquí. En concreto y referente a la prestación de nuestros servicios, queda exento:

l) El suministro de servicios de alojamiento para fines distintos del de servir de vivienda, transporte de bienes, alquiler de vehículos, comida o servicios relacionados con actividades de esparcimiento, si los contratos prevén una fecha o un periodo de ejecución específicos

Cualquier reclamación que el USUARIO considere oportuna será atendida a la mayor brevedad posible, pudiéndose realizar en las siguientes direcciones de contacto:

- Postal: Domicilio social:
- Teléfono:
- E-mail: content@premiumguest.com

Resolución de litigios en línea (Online Dispute Resolution)

Conforme al Art. 14.1 del Reglamento (UE) 524/2013, la Comisión Europea facilita una plataforma de acceso gratuito para la resolución de conflictos online entre el USUARIO y el PRESTADOR, sin necesidad de recurrir a los tribunales de justicia, mediante la intervención de un tercero, llamado Organismo de resolución de litigios, que actúa de intermediario entre ambos. Este organismo es neutral y dialogará con ambas partes para lograr un acuerdo, pudiendo finalmente sugerir y/o imponer una solución al conflicto.

Enlace a la plataforma ODR: http://ec.europa.eu/consumers/odr/

4. FUERZA MAYOR

Las partes no incurrirán en responsabilidad ante cualquier falta debida a causa mayor. El cumplimiento de la obligación se demorará hasta el cese del caso de fuerza mayor.

5. COMPETENCIA

El USUARIO no podrá ceder, transferir o transmitir los derechos, responsabilidades y obligaciones contratados en la venta.

Si alguna estipulación de estas condiciones fuera considerada nula o de imposible cumplimiento, la validez, legalidad y cumplimiento del resto no se verán afectados de ninguna manera, ni sufrirán modificación de ningún modo.

El USUARIO declara haber leído, conocer y aceptar las presentes Condiciones en toda su extensión.

6. GENERALIDADES DE LA OFERTA

Todas las ventas y entregas efectuadas por el PRESTADOR se entenderán sometidas a las presentes Condiciones.

Ninguna modificación, alteración o pacto contrario a la Propuesta Comercial de Dual Crew o a lo aquí estipulado, tendrá efecto, salvo pacto expreso por escrito firmado por el PRESTADOR, en este caso, estos pactos particulares prevalecerán.

7. PRECIO Y PLAZO DE VALIDEZ DE LA OFERTA

Los precios que se indican respecto de cada entrada incluyen el Impuesto sobre el Valor Añadido (IVA) u otros impuestos que pudieran ser aplicables. Estos precios, a menos que se indique expresamente lo contrario, no incluyen los gastos de envío o comunicación, manipulación o cualesquiera otros servicios adicionales y anexos al producto adquirido.

Los precios aplicables a cada evento o entrada son los publicados en el sitio web y se expresarán en la moneda EURO. El USUARIO asume que la valoración económica de algunos de los productos podrá variar en tiempo real.

Antes de realizar la compra podrá comprobar en línea todos los detalles del presupuesto: entradas elegidas, cantidades, precio, disponibilidad, gastos de gestión, cargos, descuentos, impuestos y el total de la compra. Los precios pueden cambiar diariamente mientras no se realice el pedido.

Una vez realizado el pago, los precios se mantendrán tanto si hay disponibilidad de más entradas como si no.

Todo pago realizado al PRESTADOR conlleva la emisión de una factura a nombre del USUARIO o de la razón social que este haya informado en el momento de realizar el pedido. Por norma general no se envía factura, en caso de querer recibirla, deberá solicitarlo por cualquiera de los medios que el PRESTADOR pone a su disposición, informándole de que en cualquier momento podrá revocar dicha decisión.

Para cualquier información sobre el pedido, el USUARIO podrá contactar a través del correo electrónico a la dirección grooveinclub@gmail.com

8. FORMAS DE PAGO, CARGOS Y DESCUENTOS

El USUARIO podrá utilizar un cupón o código de descuento en el momento previo a la finalización de la compra en caso de disponer de uno.

Medidas de seguridad

El sitio web utiliza técnicas de seguridad de la información generalmente aceptadas en la industria, tales como SSL, datos introducidos en página segura, firewalls, procedimientos de control de acceso y mecanismos criptográficos, todo ello con el objeto de evitar el acceso no autorizado a los datos. Para lograr estos fines, el usuario/cliente acepta que el prestador obtenga datos para efecto de la correspondiente autenticación de los controles de acceso.

El PRESTADOR se compromete a no permitir ninguna transacción que sea considerada ilegal por las marcas de tarjetas de crédito o el banco adquiriente y que pueda o tenga el potencial de dañar la buena voluntad de los mismos o influir de manera negativa en ellos.

Está prohibida, en virtud de los programas de las marcas de tarjetas, la venta u oferta de un producto o servicio que no cumpla con todas las leyes aplicables al Comprador, Banco Emisor, Comerciante o Titular de la tarjeta o tarjetas.

9. PROCESO DE COMPRA

Cualquier entrada disponible en nuestra Web se puede añadir a la cesta. En ésta, solo se observarán los artículos, la cantidad, el precio y el importe total. Una vez guardada la cesta, si es el caso, se procederá a calcular los impuestos, cargos y descuentos según los datos de pago introducidos.

Las cestas no tienen ninguna vinculación administrativa, solo es un apartado donde se puede simular un presupuesto sin ningún compromiso por ambas partes.

Desde la cesta se puede hacer un pedido siguiendo los pasos siguientes para su correcta formalización:

- Comprobación de los datos de facturación.
- Comprobación de los datos del comprador.
- Selección de la forma de pago.
- Realizar el pedido (comprar).

Una vez procesado el pedido, el sistema envía instantáneamente un correo electrónico al departamento de gestión del PRESTADOR y otro al correo del USUARIO confirmando la realización del pedido.

10. DISOCIACIÓN Y SUSPENSIÓN O RESCISIÓN DEL CONTRATO

Si cualquiera de estos términos y condiciones se considerara ilegal, nula o por cualquier razón inaplicable, esta condición se considerará separable y no afectará la validez y aplicabilidad de ninguna de las condiciones restantes.

El PRESTADOR podrá, sin previo aviso, suspender o terminar el acceso del USUARIO a sus servicios, en su totalidad o en parte, cuando el USUARIO no cumpla las obligaciones establecidas en este contrato o cualquier disposición legal, licencia, reglamento, directiva, código de prácticas o políticas que le sean aplicables.

Cuando El PRESTADOR ejerza cualquiera de sus derechos o facultades bajo esta Cláusula, tal ejercicio no perjudicará ni afectará el ejercicio de cualquier otro derecho, facultad o recurso que pueda estar a disposición de El PRESTADOR.

11. GARANTÍAS Y DEVOLUCIONES

Las garantías responderán a lo regulado en el Título referido a Garantías y servicios posventa del Real Decreto Legislativo 1/2007, de 16 de noviembre, por el que se aprueba el texto refundido de la Ley General para la Defensa de los Consumidores y Usuarios y otras leyes complementarias, al que puede acceder a través de esta URL: https://www.boe.es/buscar/doc.php?id=BOE-A-2007-20555

12. LEY APLICABLE Y JURISDICCIÓN

Estas condiciones se regirán o interpretarán conforme a la legislación española en aquello que no esté expresamente establecido. Cualquier controversia que pudiera suscitarse de la prestación de los productos o servicios objeto de estas Condiciones se someterá a los juzgados y tribunales del domicilio del USUARIO, al lugar del cumplimiento de la obligación o aquél en que se encuentre el bien si éste fuera inmueble."
              title="Términos y Condiciones"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
