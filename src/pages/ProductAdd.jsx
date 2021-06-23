import React from "react";
import { Form, Formik ,Field,ErrorMessage} from "formik";
import * as Yup from "yup";
import { FormField,Button,Label } from "semantic-ui-react";
import KodlamaIoTextInput from "../utilities/KodlamaIoTextInput";

export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 10 }; //formun ilk değerleribunlar, validationSchema kurallar vereceğmiz şemamız
  

  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunlu"),
    unitPrice: Yup.number().required("Ürün fiyatı zorunlu"),
  }); //yup doğrulama yapmamızı sağlayan yapı

  return (
    <div>
      <Formik 
      initialValues={initialValues} validationSchema={schema} 
      onSubmit={(values)=>{
          console.log(values)
      }}>
        <Form className="ui form">
            <KodlamaIoTextInput name="productName" placeholder="Ürün adı"/>
            <KodlamaIoTextInput name="unitPrice" placeholder="Ürün fiyatı"/>
          {/* <FormField>
            <Field name="productName" placeholder="Ürün adı"></Field>
            <ErrorMessage name="productName" render={error=>
                <Label pointing basic color="red" content={error}></Label>
            }></ErrorMessage>
          </FormField> */}
          {/* <FormField>
          <Field name="unitPrice" placeholder="Ürün fiyatı"></Field>
          <ErrorMessage name="unitPrice" render={error=>
                <Label pointing basic color="red" content={error}></Label>
            }></ErrorMessage>
          </FormField> */}
          <Button color="green" type="submit">Ekle</Button>
        </Form>
      </Formik>
    </div>
  );
}
