
let complexNestedObject = {
      prop1: "value1",
      prop2: {
          nestedProp1: "nestedValue1",
          nestedProp2: [1, 2, 3, 4],
          nestedProp3: {
              deepNestedProp1: "deepNestedValue1",
              deepNestedProp2: [5, 6, 7, 8],
              deepNestedProp3: {
                  deeperNestedProp1: "deeperNestedValue1",
                  deeperNestedProp2: [9, 10, 11, 12]
              }
          }
      },
      prop3: [
          {
              arrayProp1: "arrayValue1",
              arrayProp2: [13, 14, 15]
          },
          {
              arrayProp1: "arrayValue2",
              arrayProp2: [16, 17, 18]
          }
      ],
      prop4: {
          nestedProp4: "nestedValue4",
          nestedProp5: [
              {
                  deeperArrayProp1: "deeperArrayValue1",
                  deeperArrayProp2: [19, 20, 21]
              },
              {
                  deeperArrayProp1: "deeperArrayValue2",
                  deeperArrayProp2: [22, 23, 24]
              }
          ]
      }
  };

  console.log(complexNestedObject.prop4.nestedProp5[1].deeperArrayProp2[2]);
  console.log(complexNestedObject.prop4.nestedProp5[0].deeperArrayProp2[1]);
  console.log(complexNestedObject.prop3[1].arrayProp2[2]);
  console.log(complexNestedObject.prop2.nestedProp1);
  console.log(complexNestedObject.prop2.nestedProp2[3]);
  console.log(complexNestedObject.prop2.nestedProp3.deepNestedProp3.deeperNestedProp2[3]);
  console.log(complexNestedObject.prop1);