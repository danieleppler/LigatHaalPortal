using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

public class Test
{
    public Dictionary<String, int> WordsFrequencies(String[] words)
    {
        Dictionary<String, int> dic = new Dictionary<String, int>();

        foreach (string word in words)
        {
            if (dic[word] == null)
                dic[word]++;
            else dic[word] = 1;
        }

        return dic;
    }
}

