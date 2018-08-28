using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace MyNamespace {
  public class MyClass {
  
    public MyClass() {}

    public void SomeMethod() {}

    private int _variable;

    public int Variable {
      get { return _variable; }
      set { _variable = value; }
    }

    public Dictionary<string, object> Tags {}

    public static void Main() {
      MyClass instance = new MyClass();

      instance.SomeMethod();

      instance.Variable = 99;

      System.Console.WriteLine( "Variable=" + instance.Variable.ToString() );
    }
  }
}